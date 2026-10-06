<!-- ColorBanner.vue -->
<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import defaultOverlay from '/images/banner-overlay.png'
import { MOD_CONFIG } from '../constants/mod.js'

const tipVisible = ref(false)
const tipX = ref(0)
const tipY = ref(0)

function onBadgeMove(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  // 转成相对 .badge 的坐标（因为 .badge 有 scale，用 rect 换算）
  tipX.value = (e.clientX - rect.left) / autoScale.value
  tipY.value = (e.clientY - rect.top) / autoScale.value
}

function onBadgeEnter() {
  tipVisible.value = true
}
function onBadgeLeave() {
  tipVisible.value = false
}

const props = defineProps({
  mod: { type: String, default: 'HD' },
  overlay: { type: String, default: defaultOverlay },
  radius: { type: Number, default: 40 },
  scale: { type: Number, default: 1 },
  colorAlpha: { type: Number, default: 0.8 },
  /** 右下角附加文字，不传则不显示 */
  other: { type: String, default: '' },
})

const BASE_W = 1920
const BASE_H = 320

function hexToRgba(hex, alpha = 1) {
  let h = String(hex).replace('#', '').trim()
  if (h.length === 3) h = h.split('').map((c) => c + c).join('')
  const num = parseInt(h, 16)
  const r = (num >> 16) & 255
  const g = (num >> 8) & 255
  const b = num & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const outerRef = ref(null)
const autoScale = ref(1)
let ro = null

onMounted(() => {
  autoScale.value = outerRef.value.clientWidth / BASE_W  // 先量一次，避免首帧跳动
  ro = new ResizeObserver(([entry]) => {
    autoScale.value = entry.contentRect.width / BASE_W
  })
  ro.observe(outerRef.value)
})

onBeforeUnmount(() => ro?.disconnect())

const finalScale = computed(() => autoScale.value * props.scale)

/** 统一算出当前 mod 的配置，避免重复取 */
const modKey = computed(() => String(props.mod || '')
    .replace(/[0-9]+$/g, '').trim().toUpperCase())
const modNum = computed(() => {
  const m = String(props.mod || '').match(/(\d+)$/)
  return m ? m[1] : ''
})

const modConf = computed(() => MOD_CONFIG[modKey.value] ?? MOD_CONFIG.DEFAULT)

const bgColor = computed(() => hexToRgba(modConf.value.bg, props.colorAlpha))
const descText = computed(() => modConf.value.desc ?? '')

/** 左上角：配置里的 name */
const BottomText = computed(() => modConf.value.name ?? (modKey.value + modNum.value))
/** 左下角：key 的大写 */
const topText = computed(() => modConf.value.alias ?? (modKey.value + modNum.value))
const textColor = computed(() => {
  const raw = modConf.value.color ?? '#fff'
  return hexToRgba(raw, props.colorAlpha)
})

const outerStyle = computed(() => ({
  height: `${BASE_H * finalScale.value}px`,
}))

const badgeStyle = computed(() => ({
  backgroundColor: bgColor.value,
  borderRadius: `${props.radius}px`,
  transform: `scale(${finalScale.value})`,
}))
</script>

<template>
  <div
      ref="outerRef"
      class="badge-outer"
      :style="outerStyle"
      @mousemove="onBadgeMove"
      @mouseenter="onBadgeEnter"
      @mouseleave="onBadgeLeave"
  >
    <div class="badge" :style="badgeStyle">
      <img class="badge__overlay" :src="overlay" alt="" aria-hidden="true" draggable="false" />
      <div
          v-if="descText && tipVisible"
          class="badge__tip"
          :style="{ left: tipX + 'px', top: tipY + 'px' }"
          role="tooltip"
      >
        {{ descText }}
      </div>

      <!-- 左上角文字 -->
      <div class="badge__corner badge__corner--tl" :style="{ color:textColor }">
        <slot name="top-left" :mod="modKey" :conf="modConf">
          {{ topText }}
        </slot>
      </div>

      <!-- 左下角文字 -->
      <div class="badge__corner badge__corner--bl" :style="{ color:textColor }">
        <slot name="bottom-left" :mod="modKey" :conf="modConf">
          {{ BottomText }}
        </slot>
      </div>

      <div
          v-if="other"
          class="badge__corner badge__corner--br"
          :style="{ color: textColor }"
      >
        <slot name="bottom-right" :mod="modKey" :conf="modConf">
          {{ other }}
        </slot>
      </div>

      <!-- 中间内容 -->
      <div class="badge__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.badge-outer {
  position: relative;
  width: 100%;
  margin: clamp(8px, 2.222cqw, 20px) auto 0;
}

.badge {
  position: absolute;
  top: 0;
  left: 0;
  width: 1920px;
  height: 320px;
  overflow: hidden;
  transform-origin: top left;
  isolation: isolate;
}

.badge__overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: fill;
  pointer-events: none;
  user-select: none;
}

/* 角落文字通用样式 */
.badge__corner {
  user-select: none;
  position: absolute;
  z-index: 2;
  left: 48px;
  font-family: 'Torus Bold', 'Torus SemiBold', 'Torus', system-ui, sans-serif;  /* ← 名字对上 */
  line-height: 1;
  letter-spacing: 0.02em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);  /* 底色浅时也能看清 */
  white-space: nowrap;
}

.badge__corner--tl {
  top: 16px;
  font-size: 108px;
}

.badge__corner--bl {
  bottom: 40px;
  font-size: 72px;
}

.badge__corner--br {
  right: 48px;      /* 靠右 */
  bottom: 40px;     /* 和左下角同一基线 */
  left: auto;       /* 覆盖通用样式的 left: 48px */
  font-size: 72px;  /* 和左下角一致 */
}

.badge__content {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 64px;
}

.badge__tip {
  position: absolute;
  z-index: 3;
  /* 默认偏移到鼠标右下方，避免遮住指针 */
  transform: translate(16px, 16px);
  max-width: 40%;
  padding: 10px 16px;
  box-sizing: border-box;

  background: rgba(0, 0, 0, 0.78);
  color: #fff;
  border-radius: 10px;
  font-size: 28px;
  line-height: 1.35;
  text-align: left;
  white-space: normal;
  word-break: break-word;

  pointer-events: none;   /* 不挡鼠标，否则会触发 leave */
  transition: opacity 0.12s ease;
}

/* 悬停整个 banner 时显示 */
.badge:hover .badge__tip {
  opacity: 1;
  transform: translate(-50%, 0);
}

</style>