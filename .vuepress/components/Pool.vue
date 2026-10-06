<!-- ColorBanner.vue -->
<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import defaultOverlay from '/images/banner-overlay.png'
import { MOD_CONFIG } from '../constants/mod.js'

const props = defineProps({
  mod: { type: String, default: 'HD' },
  overlay: { type: String, default: defaultOverlay },
  radius: { type: Number, default: 40 },
  scale: { type: Number, default: 1 },
  colorAlpha: { type: Number, default: 0.8 },
  /** 角落文字字号（基于 1920x320 设计稿） */
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
const modKey = computed(() => String(props.mod || '').trim().toUpperCase())
const modConf = computed(() => MOD_CONFIG[modKey.value] ?? MOD_CONFIG.DEFAULT)

const bgColor = computed(() => hexToRgba(modConf.value.bg, props.colorAlpha))

/** 左上角：配置里的 name */
const BottomText = computed(() => modConf.value.name ?? modKey.value)
/** 左下角：key 的大写 */
const topText = computed(() => modConf.value.alias ?? modKey.value)
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
  <div ref="outerRef" class="badge-outer" :style="outerStyle">
    <div class="badge" :style="badgeStyle">
      <img class="badge__overlay" :src="overlay" alt="" aria-hidden="true" draggable="false" />

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
  bottom: 48px;
  font-size: 72px;
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
</style>