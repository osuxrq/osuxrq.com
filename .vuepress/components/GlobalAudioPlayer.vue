<template>
  <div
      v-if="state.src && state.src.trim() !== ''"
      class="global-audio-player"
      :class="{ 'is-collapsed': isCollapsed }"
  >
    <!-- 收起/展开 按钮 -->
    <button class="toggle-btn" @click="isCollapsed = !isCollapsed" :title="isCollapsed ? '展开播放器' : '收起播放器'">
      <svg v-if="isCollapsed" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
      </svg>
      <span v-else>✕</span>
    </button>

    <!-- 展开时展示的内容 -->
    <div v-show="!isCollapsed" class="player-content">
      <div class="audio-header">
        <div ref="wrapperRef" class="title-wrapper">
          <div class="title-track" :class="{ 'is-scrolling': isOverflow }">
            <!-- 基础文本 -->
            <span ref="titleRef" class="title" :title="state.title">{{ state.title || '正在播放音频' }}</span>
            <!-- 仅在文本超长时渲染第二个副本，实现首尾相接无缝滚动 -->
            <span v-if="isOverflow" class="title" aria-hidden="true">{{ state.title || '正在播放音频' }}</span>
          </div>
        </div>
      </div>

      <div class="audio-controls">
        <audio
            ref="audioRef"
            :src="state.src"
            :volume="state.volume"
            controls
            autoplay
            @volumechange="onVolumeChange"
            @ended="onAudioEnded"
        ></audio>
      </div>
    </div>
  </div>
</template>

<script setup>import { ref, watch, onMounted, nextTick } from 'vue'
import { useAudioStore } from '../constants/audioStore.js'

const isCollapsed = ref(false)
const isOverflow = ref(false)
const wrapperRef = ref(null)
const titleRef = ref(null)

const { state, setVolume, pauseAudio } = useAudioStore()
const audioRef = ref(null)

// 优化后的文本超长检测逻辑
const checkOverflow = async () => {
  // 先暂停滚动，确保获取到未被 transform 影响的原始真实宽度
  isOverflow.value = false
  await nextTick()

  if (wrapperRef.value && titleRef.value) {
    // 比较 单个标题的文本真实宽度 与 容器的可见宽度
    isOverflow.value = titleRef.value.scrollWidth > wrapperRef.value.clientWidth
  }
}

// 1. 监听 state.title 变化重新检测
watch(() => state.title, () => {
  checkOverflow()
})

// 2. 监听展开状态，从收起状态切回展开状态时重新检测 DOM
watch(isCollapsed, (collapsed) => {
  if (!collapsed) {
    checkOverflow()
  }
})

const syncAudioVolume = () => {
  if (audioRef.value) {
    audioRef.value.volume = state.volume
  }
}

const onVolumeChange = () => {
  if (audioRef.value) {
    if (Math.abs(audioRef.value.volume - state.volume) > 0.01) {
      setVolume(audioRef.value.volume)
    }
  }
}

const onAudioEnded = () => {
  pauseAudio()
}

onMounted(() => {
  syncAudioVolume()
  checkOverflow() // 👈 3. 组件挂载完成时立即检测一次

  watch(
      () => state.volume,
      (newVol) => {
        if (audioRef.value) {
          audioRef.value.volume = newVol
        }
      }
  )

  watch(
      () => state.isPlaying,
      (playing) => {
        if (!audioRef.value) return
        if (playing) {
          syncAudioVolume()
          audioRef.value.play().catch(() => {})
        } else {
          audioRef.value.pause()
        }
      }
  )

  watch(
      () => state.src,
      () => {
        isCollapsed.value = false // 点击新音频时，自动展开播放器

        if (audioRef.value) {
          audioRef.value.volume = state.volume
          if (state.isPlaying) {
            audioRef.value.currentTime = 0
            audioRef.value.play().catch(() => {})
          }
        }
      }
  )
})
</script>

<style scoped>

.player-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

/* 全局播放器基础样式（展开时） */
.global-audio-player {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 99999;
  background: #ffffff;
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 280px;
  box-sizing: border-box;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 展开状态下的关闭按钮 */
.toggle-btn {
  position: absolute;
  top: 6px;
  right: 6px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #718096;
  font-size: 14px;
  width: 24px;
  height: 24px;
  padding: 0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  z-index: 2;
}

.toggle-btn:hover {
  background: #edf2f7;
  color: #2d3748;
}

/* ------------------------------------------- */
/* 收起（小圆圈）状态 - 强行重置容器属性 */
/* ------------------------------------------- */
.global-audio-player.is-collapsed {
  min-width: unset !important;
  width: 44px !important;
  height: 44px !important;
  padding: 0 !important;
  border-radius: 50% !important;
  bottom: 20px;
  left: 20px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border: 2px solid #3eaf7c;
  background: #ffffff;
}

/* 收起状态下的切换按钮：充满整个小圆圈 */
.global-audio-player.is-collapsed .toggle-btn {
  position: static !important;
  width: 100% !important;
  height: 100% !important;
  border-radius: 50% !important;
  background: #ffffff;
  color: #3eaf7c;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.global-audio-player.is-collapsed .toggle-btn:hover {
  background: #f0fdf4;
}

.global-audio-player.is-collapsed .toggle-btn svg {
  width: 22px;
  height: 22px;
}

/* 外层视口：遮罩溢出内容 */
.audio-header .title-wrapper {
  max-width: 230px;
  overflow: hidden;
  white-space: nowrap;
}

/* 标题轨道基础样式 */
.audio-header .title-track {
  display: inline-flex;
  white-space: nowrap;
}

/* 仅在超长 (is-scrolling) 时开启跑马灯动画 */
.audio-header .title-track.is-scrolling {
  animation: marquee 12s linear infinite;
}

/* 单个文本块样式 */
.audio-header .title {
  font-size: 14px;
  font-weight: 600;
  color: #2d3748;
}

/* 仅在滚动模式下，文本之间留出间距 */
.audio-header .title-track.is-scrolling .title {
  padding-right: 32px;
}

/* 鼠标悬停时暂停 */
.audio-header .title-wrapper:hover .title-track.is-scrolling {
  animation-play-state: paused;
}

/* 无缝平移动画 */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.audio-controls audio {
  width: 100%;
  height: 32px;
}
</style>