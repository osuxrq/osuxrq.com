
<script setup>
import { computed } from 'vue'

const props = defineProps({
  bid: [String, Number],
  sid: [String, Number],
  preview: String,
  star: [String, Number]
})

const thumbSrc = computed(() => `https://assets.ppy.sh/beatmaps/${props.sid}/covers/list.jpg`)
const imgSrc = computed(() => `https://assets.ppy.sh/beatmaps/${props.sid}/covers/cover.jpg`)

const targetUrl = computed(() => {
  if (props.bid != null) {
    return `https://osu.ppy.sh/b/${props.bid}`
  } else if (props.sid != null) {
    return `https://osu.ppy.sh/s/${props.sid}`
  } else {
    return 'https://osu.ppy.sh/beatmapsets'
  }
})

const parsedData = computed(() => {
  const str = props.preview || ""
  // 匹配 A - B (C) [D]
  const regex = /^(.*?)\s*-\s*([^-()\[\]]+?)\s*(?:\((.*?)\))?\s*(?:\[(.*)\])?$/;
  const match = str.match(regex);

  if (match) {
    return {
      artist: match[1]?.trim(), // yandere
      title: match[2]?.trim(), // fall from grace
      creator: match[3]?.trim(), // Chrisse
      difficulty: match[4]?.trim(),  // [4K] afterimage
      bid: props.bid?.toString() ?? '0'
    };
  }
})


const statusColor = computed(() => {
  const star = parseFloat(props.star)

  if (star == null || Number.isNaN(star) || star < 0.1) return '#AAAAAA';
  if (star >= 9) return '#000000';

  const GAMMA = 2.2;

  // 配置表：[阈值, R, G, B]
  const stops = [
    [0.1,  66,  144, 251],
    [1.25, 79,  192, 255],
    [2,    79,  255, 213],
    [2.5,  124, 255, 79],
    [3.3,  246, 240, 92],
    [4.2,  255, 104, 104],
    [4.9,  255, 78,  111],
    [5.8,  198, 69,  184],
    [6.7,  101, 99,  222],
    [7.7,  24,  21,  142],
    [9,    0,   0,   0]
  ];

  // 1. 找到当前 star 落在哪个区间
  let i = stops.findIndex(stop => star < stop[0]);
  if (i === -1) i = stops.length - 1;

  const [bottom, r0, g0, b0] = stops[i - 1];
  const [top, r1, g1, b1] = stops[i];

  // 2. 计算插值比例
  const s = (star - bottom) / (top - bottom);

  // 3. 伽马校正插值函数
  const interpolate = (c0, c1) => {
    const val = Math.pow(
        (1 - s) * Math.pow(c0, GAMMA) + s * Math.pow(c1, GAMMA),
        1 / GAMMA
    );

    const hex = Math.round(val).toString(16);
    return ("00" + hex).slice(-2);
  };

  return `#${interpolate(r0, r1)}${interpolate(g0, g1)}${interpolate(b0, b1)}`;
})

</script>

<template>
  <a :href="targetUrl" target="_blank" class="data-card-container">
    <div class="card-canvas">
      <div class="color-rect" :style="{ backgroundColor: statusColor }"></div>

      <div class="base-rect" :style="{ backgroundImage: `url(${imgSrc})` }"></div>

      <div class="preview-rect" :style="{ backgroundImage: `url(${thumbSrc})` }"></div>

      <div class="text-content">
        <span class="part-a">{{ parsedData.title }}</span>
      </div>
      <div class="text-content-2">
        <span class="part-b" v-if="parsedData.artist && parsedData.creator">{{parsedData.artist + ' // ' + parsedData.creator}}</span>
      </div>
      <div class="text-content-3">
        <span class="part-c" v-if="parsedData.difficulty">{{`[${parsedData.difficulty}]`}}</span>
      </div>
      <div class="text-content-4">
        <span class="part-d" v-if="parsedData.bid">{{'b' + parsedData.bid}}</span>
      </div>
    </div>
  </a>
</template>

<style scoped>

.data-card-container {
  display: block;
  width: 100%;
  max-width: 900px;
  aspect-ratio: 900 / 110;
  margin: 20px auto;
  text-decoration: none !important;
  /* 移到最外层 */
  border-radius: 2.222% / 18.182%;
  overflow: hidden;
  container-type: inline-size;
  /* 确保在某些浏览器下强制开启硬件加速，解决锯齿问题 */
  transform: translateZ(0);
}

/* 点击瞬间：缩小 */
.data-card-container:active {
  transform: scale(0.99);
  transition: transform 0.1s cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* 给背景图增加过渡 */
.base-rect, .preview-rect {
  transition: filter 0.3s ease, transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* 悬停时：背景变暗 + 图片微扩 */
.data-card-container:hover .base-rect {
  filter: brightness(0.6) contrast(1.1);
}

/* 悬停时：预览图边缘发光 */
.data-card-container:hover .preview-rect {
  filter: brightness(1.1) contrast(1.1);
}

.card-canvas {
  position: relative;
  width: 100%;
  height: 100%;
  background: #2a2226;
}

/* 颜色矩形 */
.color-rect {
  position: absolute;
  left: 0;
  top: 0;
  width: 21.77%;
  height: 100%;
  border-radius: 10.204% / 18.182%;
  //border-radius: 20px;
  z-index: 1;
}

/* 底板矩形: x=176, width=724 -> left: (176/900)*100%, width: (724/900)*100% */
.base-rect {
  position: absolute;
  left: 14.889%;
  top: 0;
  width: 85.111%;
  height: 100%;
  border-radius: 2.611% / 18.182%;
  //border-radius: 20px;
  background-size: cover;
  background-position: center;
  opacity: 0.4;
  z-index: 2;
}

.preview-rect {
  position: absolute;
  left: 2.22%;
  top: 0;
  width: 19.55%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 11.364% / 18.182%;
  //border-radius: 20px;
  z-index: 3;
}

@container (min-width: 0px) {
  .text-content {
    position: absolute;
    left: 23.55%;
    top: 4%;

    width: 70%;
    white-space: nowrap;
    overflow: visible;
    z-index: 4;

    font-family: "Torus SemiBold", sans-serif;
    font-size: 4cqw;
    line-height: 1;
    color: #ffffff;
    text-shadow: 0 2px 10px rgba(0,0,0,0.8);
  }

  .text-content-2 {
    position: absolute;
    left: 23.55%;
    top: 43%;

    width: 70%;
    white-space: nowrap;
    overflow: visible;
    z-index: 4;

    font-family: "Torus SemiBold", sans-serif;
    font-size: 2.667cqw;
    line-height: 1;
    color: #aaaaaa;
    text-shadow: 0 2px 10px rgba(0,0,0,0.8);
  }

  .text-content-3 {
    position: absolute;
    left: 23.55%;
    top: 70%;

    width: 70%;
    white-space: nowrap;
    overflow: visible;
    z-index: 4;

    font-family: "Torus SemiBold", sans-serif;
    font-size: 2.667cqw;
    line-height: 1;
    color: #aaaaaa;
    text-shadow: 0 2px 10px rgba(0,0,0,0.8);
  }
}

.text-content-4 {
  text-align: right;

  position: absolute;
  right: 1.67%;
  top: 70%;

  width: auto;
  white-space: nowrap;
  overflow: visible;
  z-index: 4;

  font-family: "Torus SemiBold", sans-serif;
  font-size: 2.667cqw;
  line-height: 1;
  color: #aaaaaa;
  text-shadow: 0 2px 10px rgba(0,0,0,0.8);
}

.data-card-container {
  container-type: inline-size;
}

</style>