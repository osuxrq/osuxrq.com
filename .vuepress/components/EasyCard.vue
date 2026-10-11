<!-- src/components/EasyCard.vue -->
<script setup>
import { computed } from 'vue'
import { getUserColour } from "../constants/userColor.js";

const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: null
  },
  link: {
    type: String,
    default: null
  }
})

// 头像 URL
const avatarUrl = computed(() => {
  return `https://a.ppy.sh/${props.id}`
})

const linkUrl = computed(() => {
  if (!props.link) return '#'
  if (props.link?.startsWith('http')) return props.link
  if (typeof props.id === 'number') return `https://osu.ppy.sh/u/${props.id}`
  return props.link
})

// 获取原始 Hex 颜色
const rawColor = computed(() => {
  if (props.color) return props.color
  if (typeof props.id === 'number' || typeof props.id === 'string') {
    return getUserColour(props.id.toString())
  }
  if (typeof props.name === 'string') {
    return getUserColour(props.name.toString())
  }
  if (typeof props.title === 'string') {
    return getUserColour(props.title.toString())
  }
  return '#666666'
})

// 核心：将 Hex 转换为 0.2 透明度的 rgba 格式，彻底避开 CSS 自定义属性解析问题
const cardBackground = computed(() => {
  let hex = rawColor.value.replace('#', '')
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('')
  }
  const num = parseInt(hex, 16)
  const r = (num >> 16) & 255
  const g = (num >> 8) & 255
  const b = num & 255

  // 返回 20% 透明度的 rgba，并利用 CSS 多重背景与 VuePress 的 --vp-bg 垫底
  return `linear-gradient(rgba(${r}, ${g}, ${b}, 0.2), rgba(${r}, ${g}, ${b}, 0.2)), var(--vp-c-bg)`
})
</script>

<template>
  <router-link
      :to="linkUrl"
      class="custom-card"
      :style="{ background: cardBackground }"
  >
    <!-- 左侧圆形头像 -->
    <div class="avatar-container">
      <img :src="avatarUrl" :alt="title" class="avatar-img" />
    </div>

    <!-- 右侧内容区域 -->
    <div class="content-container">
      <div class="card-name">{{ name }}</div>
      <div class="card-title">{{ title }}</div>
    </div>
  </router-link>
</template>

<style scoped>
.custom-card {
  width: 300px;
  height: 120px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none !important;
  color: inherit;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;
  background-blend-mode: normal;
}

.custom-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

/* 左侧头像 */
.avatar-container {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  z-index: 1;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 右侧内容区 */
.content-container {
  margin-left: 100px;
  width: calc(300px - 40px - 100px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;
  z-index: 1;
}

/* 顶部名称 */
.card-name {
  align-self: flex-start;
  text-align: left;
  font-size: 24px;
  font-weight: 700;
  color: var(--vp-c-text, #1a1a1a);
  line-height: 1.1;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 100%;
}

/* 底部标题 */
.card-title {
  align-self: flex-start;
  text-align: left;
  font-size: 16px;
  color: var(--vp-c-text-subtle, #555);
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 100%;
}
</style>