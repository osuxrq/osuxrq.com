<template>
  <div class="audio-card">
    <span class="card-title">{{ name }}</span>
    <div class="actions">
      <button class="btn play" @click="playAudio(url, name)">播放</button>
      <button class="btn download" @click="downloadAudio(url, name)">下载</button>
    </div>
  </div>
</template>

<script setup>
import { useAudioStore } from '../constants/audioStore.js'

defineProps({
  name: {
    type: String,
    default: '未知音频'
  },
  url: {
    type: String,
    required: true
  }
})

const { playAudio, downloadAudio } = useAudioStore()
</script>

<style scoped>
.audio-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border: 1px solid #eaecef;
  border-radius: 6px;
  margin: 12px 0;
  background: #f8f9fa;
}
.card-title {
  font-weight: 500;
}
.btn {
  margin-left: 8px;
  padding: 4px 10px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
.btn.play {
  background: #3eaf7c;
  color: white;
}
.btn.download {
  background: #e2e8f0;
  color: #333;
}
</style>