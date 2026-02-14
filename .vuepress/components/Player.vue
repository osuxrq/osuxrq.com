

<script setup>

import {computed} from "vue";

const props = defineProps({
  id: [String, Number],
  name: [String],
  country: [String, Number],
  global: [String, Number],
  from: [String],
  accuracy: [String, Number],
  level: [String, Number],
  progress: [String, Number],
  performance: [String, Number]
});

const acc = computed(() => {
  let pa = parseFloat(props.accuracy)

  let acc

  if (isNaN(pa)) {
    acc = '0'
  } else if (pa <= 1) {
    acc = Number((pa * 100).toFixed(2)).toString()
  } else if (pa <= 100) {
    acc = Number(pa.toFixed(2)).toString()
  } else if (pa <= 10000) {
    acc = Number(pa.toFixed(2)).toString()
  } else {
    acc = '0'
  }

  return acc
})

const countryFlag = computed (() => {
  let country
  // 验证输入：必须是两位字母
  if (!/^[A-Za-z]{2}$/.test(props.from)) {
    country = 'XX'
  } else {
    country = props.from?.toUpperCase()
  }

  // 不能有青天白日旗
  if (country === 'TW') {
    country = 'CN'
  }

  // 区域指示符起始码点
  const BASE = 0x1F1E6;

  // 计算两个字母的码点
  const firstCode = BASE + country.charCodeAt(0) - 65; // A=65
  const secondCode = BASE + country.charCodeAt(1) - 65;

  // 转换为小写十六进制，去掉0x前缀，用连字符连接
  return `https://osu.ppy.sh/assets/images/flags/${firstCode.toString(16).toLowerCase()}-${secondCode.toString(16).toLowerCase()}.svg`;
})

</script>

<template>
  <div class="user-card-container">
    <a :href="`https://osu.ppy.sh/u/${props.id}`" target="_blank" class="user-card">
      <span class="card-bg-animated"></span>

      <span class="card-overlay"></span>

      <img :src="`https://a.ppy.sh/${props.id}`" class="user-avatar" alt="avatar" />

      <img :src="`${countryFlag}`" class="user-flag" alt="country flag" />

      <span class="text-global">#{{ props.global ?? 0 }}</span>
      <span class="text-country">{{ props.from ?? '??' }}#{{ props.country ?? 0 }}</span>
      <span class="text-name">{{ props.name ?? 'Unknown' }}</span>

      <span class="text-stats">
        {{ acc }}% Lv.{{ props.level ?? 0 }}({{ props.progress ?? 0 }}%)
      </span>

      <span class="pp-container">
        <span class="text-perf">{{ props.performance }}</span>
        <span class="text-pp">PP</span>
      </span>
    </a>
  </div>
</template>

<style scoped>
/* 基础换算系数: 1px / 430px * 100 = 0.2325581395348837cqw
*/

.user-card-container {
  container-type: inline-size;
  width: 100%;
  max-width: 430px; /* 默认最大宽度 */
  min-width: 200px;
}

/* 动画定义：移动背景图的位置 */
@keyframes streamer {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

.card-bg-animated {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  /* 使用你提供的渐变色 */
  background: linear-gradient(
      30deg,
      #c42d01,
      #fcf26e,
      #00e754,
      #00eef4,
      #0070f3,
      #c42d01
  );

  /* 关键：背景尺寸要大于 100%，动画才有滚动空间 */
  background-size: 400% 400%;
  animation: streamer 10s ease infinite;
  opacity: 0.6; /* 保持一定的透明度，让 card-overlay 能透出底色 */

  transition: filter 0.3s ease, opacity 0.3s ease;
}

.user-card {
  display: block; /* 确保 a 标签撑开宽度 */
  text-decoration: none; /* 移除默认下划线 */
  cursor: pointer; /* 鼠标悬停显示手型 */

  position: relative;
  overflow: hidden;
  width: 100cqw;
  height: 48.837cqw; /* 210px / 430px */
  background-color: #2a2226;
  border-radius: 3.488cqw; /* 15px */
  font-family: "Torus SemiBold", sans-serif;
  color: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
}

.card-overlay {
  display: block;
  position: absolute;
  inset: 0;
  background-color: #2a2226;
  opacity: 0.4;
  z-index: 2;
}

.user-avatar {
  display: block;
  position: absolute;
  left: 4.651cqw; /* 20px */
  top: 4.651cqw;  /* 20px */
  width: 23.256cqw; /* 100px */
  height: 23.256cqw; /* 100px */
  border-radius: 2.326cqw; /* 10px */
  z-index: 3;

  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
}

.user-flag {
  display: block;
  position: absolute;
  left: 29.767cqw; /* 128px */
  top: 15.814cqw;  /* 68px */
  width: 13.953cqw; /* 60px */
  height: 10.233cqw; /* 44px */
  z-index: 3;
}

/* 文字公共样式 */
.pp-container span {
  position: relative; /* 覆盖之前的 absolute */
  z-index: 4;
}

.text-global,
.text-country,
.text-name,
.text-stats,
.pp-container {
  position: absolute;
  z-index: 4;
  line-height: 1;
}

.text-global {
  left: 4.651cqw; /* 20px */
  top: 34.884cqw; /* 150px */
  font-size: 5.581cqw; /* 24px */
  text-shadow: 0 1px 4px rgba(0,0,0,0.5);
}

.text-country {
  left: 4.651cqw; /* 20px */
  top: 40.930cqw; /* 176px */
  font-size: 5.581cqw; /* 24px */
  text-shadow: 0 1px 4px rgba(0,0,0,0.5);
}

.text-name {
  left: 31.628cqw; /* 136px */
  top: 4.186cqw;   /* 18px */
  font-size: 9.767cqw; /* 42px */
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);

  height: 12cqw;
  width: 65.116cqw;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-stats {
  right: 2.907cqw;   /* 12.5px from right */
  top: 29.070cqw;  /* 125px */
  font-size: 5.581cqw; /* 24px */
  text-align: right;
  width: 100%;
  text-shadow: 0 1px 4px rgba(0,0,0,0.5);
}

.pp-container {
  right: 2.907cqw;   /* 12.5px from right */
  bottom: 1.86cqw;  /* 8px from bottom */
  display: flex;
  align-items: baseline; /* 保证基线对齐 */
  justify-content: flex-end;
  position: absolute;
}

.text-perf {
  position: relative;
  font-size: 13.953cqw; /* 60px */
  margin-right: 1cqw;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
}

.text-pp {
  position: relative;
  font-size: 11.163cqw; /* 48px */
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 0 1px 4px rgba(0,0,0,0.5);
}

/* 点击瞬间：缩小 */
.user-card-container:active {
  transform: scale(0.99);
  transition: transform 0.1s cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* 悬停时：背景变暗 + 图片微扩 */
.user-card-container:hover .card-bg-animated {
  filter: brightness(0.6) contrast(1.1);
}
</style>