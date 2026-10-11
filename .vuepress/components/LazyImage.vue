<script setup>
import {ref, onMounted, onUnmounted, nextTick} from 'vue';

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
  rootMargin: {
    type: String,
    default: '200px 0px'
  }
});

const targetRef = ref(null);
const isVisible = ref(false);
const bgStyle = ref({});
let observer = null;

// 核心：带降级逻辑的图片异步加载函数
const loadImage = (primaryUrl, fallbackUrl) => {
  if (!primaryUrl) return;

  // 辅助函数：提取纯 URL（兼容传进来带 url(...) 或不带的情况）
  const cleanUrl = (url) => {
    const match = url.match(/url\((['"]?)(.*?)\1\)/);
    return match ? match[2] : url;
  };

  const pUrl = cleanUrl(primaryUrl);
  const fUrl = fallbackUrl ? cleanUrl(fallbackUrl) : '';

  const img = new Image();
  img.src = pUrl;

  // 1. 尝试加载主源（官网）
  img.onload = () => {
    bgStyle.value = { backgroundImage: `url(${pUrl})` };
  };

  // 2. 主源失败，尝试备用源（Sayo）
  img.onerror = () => {
    if (fUrl) {
      const fallbackImg = new Image();
      fallbackImg.src = fUrl;
      fallbackImg.onload = () => {
        bgStyle.value = { backgroundImage: `url(${fUrl})` };
      };
      fallbackImg.onerror = () => {
        console.error(`所有图片源加载均失败: ${pUrl}, ${fUrl}`);
      };
    }
  };
};

onMounted(() => {
  nextTick(() => {
    if (!targetRef.value || isVisible.value) return;

    // 保持原有的懒加载逻辑不变
    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.boundingClientRect.height > 0) {
        isVisible.value = true;
        // 只有当元素进入可视区时，才开始触发加载流程
        loadImage(props.src, props.fallbackSrc);
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
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <component
      :is="tag"
      ref="targetRef"
      :style="bgStyle"
  >
    <slot></slot>
  </component>
</template>