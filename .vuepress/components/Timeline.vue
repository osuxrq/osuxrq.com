<template>
  <div class="timeline">
    <div
        v-for="(item, index) in sortedItems"
        :key="index"
        class="timeline-item"
    >
      <div class="timeline-point"></div>
      <div class="timeline-content">
        <span class="timeline-date">{{ item.date }}</span>
        <div class="timeline-title">{{ item.title }}</div>
        <p class="timeline-desc" v-if="item.description">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // 传入数组，例如: [{ date: '2026-03-15', title: 'VuePress 升级', description: '...' }]
  items: {
    type: Array,
    required: true,
    default: () => []
  },
  // 排序方向：'desc' (倒序，最新在前) 或 'asc' (正序)
  order: {
    type: String,
    default: 'desc'
  }
})

const sortedItems = computed(() => {
  return [...props.items].sort((a, b) => {
    const timeA = new Date(a.date).getTime()
    const timeB = new Date(b.date).getTime()
    return props.order === 'desc' ? timeB - timeA : timeA - timeB
  })
})
</script>

<style scoped>

.timeline {
  position: relative;
  padding-left: 20px;
  margin: 20px 0;
  /* 对应 SCSS 文件中的边框变量 */
  border-left: 2px solid var(--vp-c-border, #c2c2c4);
}

.timeline-item {
  position: relative;
  margin-bottom: 20px;
}

.timeline-point {
  position: absolute;
  left: -26px;
  top: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  /* 对应 SCSS 文件中的 Accent 强调色 */
  background-color: var(--vp-c-accent, #299764);
  /* 对应 SCSS 文件中的背景色，用来切断竖线 */
  border: 2px solid var(--vp-c-bg, #fff);
}

.timeline-date {
  font-size: 0.85em;
  font-weight: bold;
  /* 对应 SCSS 中的最淡文本色（日期/小字） */
  color: var(--vp-c-text-subtle);
}

.timeline-title {
  margin: 2px 0 4px;
  font-size: 1em;
  font-weight: 600;
  line-height: 1.4;
  /* 对应 SCSS 中的主文本色（白天深灰，黑夜变白） */
  color: var(--vp-c-text);
}

.timeline-desc {
  margin: 0;
  font-size: 0.9em;
  line-height: 1.4;
  /* 对应 SCSS 中的中度文本色（描述正文） */
  color: var(--vp-c-text-mute);
}
</style>