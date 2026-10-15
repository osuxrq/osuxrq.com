/**
 * 全局共享的「只触发一次」IntersectionObserver。
 *
 * 背景：Beatmap.vue / Score.vue 每个卡片会挂载 2 个 LazyImage，而整站有 2000+ 个卡片，
 * 如果每个 LazyImage 各自 new 一个 IntersectionObserver，会产生数千个 observer 实例，
 * 且每个 observer 都会强引用目标元素，滚动时的交叉计算与内存开销都很可观。
 *
 * 这里只维护 1 个 observer 实例，用元素 -> 回调 的 WeakMap 做分发，
 * 元素不可达时会被自动回收，不会泄漏。
 */

let observer = null
/** @type {WeakMap<Element, () => void>} */
const callbacks = new WeakMap()

const ROOT_MARGIN = '200px 0px'

const handleEntries = (entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue

    // 元素可能还没被 content-visibility: auto 展开，此时高度为 0，
    // 用 intersectionRatio 兜底，避免永远等不到加载。
    const hasSize = entry.boundingClientRect.height > 0
    if (!hasSize && entry.intersectionRatio <= 0) continue

    const cb = callbacks.get(entry.target)
    if (!cb) continue

    // 先摘掉回调再移除观察，防止回调内部再次触发
    callbacks.delete(entry.target)
    observer?.unobserve(entry.target)
    cb()
  }
}

const getObserver = () => {
  if (observer) return observer

  observer = new IntersectionObserver(handleEntries, {
    rootMargin: ROOT_MARGIN,
    threshold: 0.01,
  })

  return observer
}

/**
 * 当元素进入视口（提前 200px）时执行一次 callback。
 * @param {Element} el
 * @param {() => void} callback
 */
export const observeOnce = (el, callback) => {
  if (!el) return

  if (typeof IntersectionObserver === 'undefined') {
    // 极端环境兜底：直接加载
    callback()
    return
  }

  callbacks.set(el, callback)
  getObserver().observe(el)
}

export const unobserve = (el) => {
  if (!el) return
  callbacks.delete(el)
  observer?.unobserve(el)
}
