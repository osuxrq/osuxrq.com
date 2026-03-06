<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  // 接收背景图的 url 字符串，比如 "url(1.jpg), url(2.webp)"
  src: {
    type: String,
    required: true
  },
  // 允许自定义渲染的 HTML 标签，默认使用 span 匹配你原有的结构
  tag: {
    type: String,
    default: 'span'
  },
  // 提前加载的距离（比如在距离屏幕底部 100px 时就开始加载）
  rootMargin: {
    type: String,
    default: '100px 0px'
  }
});

const targetRef = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    // 当元素进入可视区域（或者达到 rootMargin 设定的提前量）
    if (entry.isIntersecting) {
      isVisible.value = true;
      // 加载后立刻停止监听，节省资源
      if (targetRef?.value) {
        observer.unobserve(targetRef.value);
      }
    }
  }, {
    rootMargin: props.rootMargin,
    threshold: 0.01
  });

  if (targetRef.value) {
    observer.observe(targetRef.value);
  }
});

onUnmounted(() => {
  // 组件销毁时断开观察者
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <component
      :is="tag"
      ref="targetRef"
      :style="isVisible && src ? { backgroundImage: src } : {}"
  >
    <slot></slot>
  </component>
</template>