<script setup>
import {computed, onUnmounted, ref, useAttrs, watchEffect} from 'vue';
import {observeOnce, unobserve} from "../constants/lazyObserver.js";

defineOptions({inheritAttrs: false})

const props = defineProps({
  // 官网主图片源
  src: {
    type: String,
    required: true
  },
  // Sayo 备选图片源
  fallbackSrc: {
    type: String,
    default: ''
  },
  tag: {
    type: String,
    default: 'span'
  },
  // 自定义根元素（例如 'img'），不传则使用 tag 指定的标签
  renderer: {
    type: [String, Object],
    default: null
  },
});

// 透传属性：class / title / style / @click 等继续落到根元素上，
// 否则 Beatmap / Score 写在 LazyImage 上的 scoped 样式会失效。
const attrs = useAttrs()

const elementTag = computed(() => props.renderer || props.tag)
const rootRef = ref(null)
const bgStyle = ref({})

// 已经失败过的 URL 不再重试，避免组件重渲染时反复发起注定失败的请求
const failedUrls = new Set()
// 已经成功加载过的 URL，避免重复创建 Image 探测
const loadedUrls = new Set()

// 辅助函数：提取纯 URL（兼容传进来带 url(...) 或不带的情况）
const cleanUrl = (url) => {
  const match = url.match(/url\((['"]?)(.*?)\1\)/);
  return match ? match[2] : url;
}

const applyBackground = (url) => {
  bgStyle.value = { backgroundImage: `url("${url}")` }
}

const loadFallback = (fUrl, tryApply) => {
  if (!fUrl || failedUrls.has(fUrl)) {
    console.error(`所有图片源加载均失败: ${fUrl || '(未配置备选源)'}`);
    return
  }

  const fallbackImg = new Image()
  fallbackImg.onload = () => tryApply(fUrl)
  fallbackImg.onerror = () => {
    failedUrls.add(fUrl)
    console.error(`所有图片源加载均失败: ${fUrl}`);
  }
  fallbackImg.src = fUrl
}

const loadImage = (pUrl, fUrl) => {
  // 主源加载成功后，只有 src 期间没有变过才应用，防止旧图覆盖新图
  const tryApply = (url) => {
    if (cleanUrl(props.src) !== pUrl) return
    loadedUrls.add(url)
    applyBackground(url)
  }

  if (loadedUrls.has(pUrl)) {
    tryApply(pUrl)
    return
  }

  // 1. 尝试加载主源（官网）
  if (pUrl && !failedUrls.has(pUrl)) {
    const img = new Image();

    img.onload = () => tryApply(pUrl);

    // 2. 主源失败，尝试备用源（Sayo）
    img.onerror = () => {
      failedUrls.add(pUrl);
      loadFallback(fUrl, tryApply);
    };

    img.src = pUrl;
    return
  }

  // 主源缺失或此前已失败，直接走备选源
  loadFallback(fUrl, tryApply);
}

/**
 * 元素进入视口后才开始加载（observeOnce 对同一元素只触发一次）；
 * src 之后发生变化时，watchEffect 会重新登记并在进入视口后加载新的图。
 */
watchEffect((onCleanup) => {
  const el = rootRef.value
  const src = props.src
  const fallback = props.fallbackSrc

  if (!el || !src) return

  observeOnce(el, () => {
    loadImage(cleanUrl(src), fallback ? cleanUrl(fallback) : '')
  })

  onCleanup(() => unobserve(el))
})

onUnmounted(() => {
  unobserve(rootRef.value)
})
</script>

<template>
  <component
      :is="elementTag"
      ref="rootRef"
      :style="bgStyle"
      v-bind="attrs"
  >
    <slot></slot>
  </component>
</template>
