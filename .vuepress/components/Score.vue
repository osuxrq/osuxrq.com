<script setup>
import {computed, ref, onMounted} from 'vue'

const isMounted = ref(false)
onMounted(() => {
  isMounted.value = true
})

const props = defineProps({
  bid: [String, Number],
  sid: [String, Number],
  preview: { type: String, default: "" },
  star: { type: [String, Number], default: 0 },
  mode: { type: String, default: "o" },
  accuracy: { type: [String, Number], default: 0 },
  combo: { type: [Number, String], default: 0 },
  max: { type: [Number, String], default: 0 },
  rank: { type: String, default: "F" },
  performance: { type: [Number, String], default: 0 },
  mods: String,
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
  const regex = /^(.*?)\s+-\s+(.*)\s+\(([^()]*)\)\s+\[(.*)]\s*$/;
  const match = str.match(regex);

  let mode

  switch (props?.mode?.toString()?.substring(0, 1)) {
    case 'o': mode = 'osu!standard'; break;
    case 't': mode = 'osu!taiko'; break;
    case 'c': case 'f': mode = 'osu!catch'; break;
    case 'm': mode = 'osu!mania'; break;

    default: mode = 'osu!standard'; break;
  }

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
    acc = ''
  }

  let stat
  if (props.combo && props.max) {
    stat = ` - ${acc}% ${props.combo}x/${props.max}x`
  } else {
    stat = ''
  }

  if (match) {
    return {
      artist: match[1]?.trim(),
      title: match[2]?.trim(),
      creator: match[3]?.trim(),
      difficulty: match[4]?.trim(),
      statistics: stat,
      bid: props.bid?.toString() ?? '0',
      mode: mode
    };
  } else {
    return {
      artist: str.toString(),
      title: '',
      creator: '',
      difficulty: '',
      statistics: '',
      bid: props.bid?.toString() ?? '0',
      mode: mode
    };
  }
})


const statusColor = computed(() => {
  const star = parseFloat(props.star)

  if (star == null || Number.isNaN(star) || star < 0.1) return '#AAAAAA';
  if (star >= 9) return '#000000';

  const GAMMA = 2.2;

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

const isModalOpen = ref(false) // 控制模态框显示

// 显示星数
const formattedStar = computed(() => {
  const num = parseFloat(props.star?.toString());
  if (isNaN(num)) return '0';

  return Number(num.toFixed(1)).toString();
})

// 绘制评级跑马灯

const rankMarquee = computed(() => {
  let colors
  switch (props.rank?.toUpperCase()) {
    case "PF":
    case "XH":
    case "SSH":
    case "EX":
    case "X+":
      colors = ['#ccc', '#fafafa']
      break;
    case "X":
    case "SS":
      colors = ['#FFC86B', '#FFFF00']
      break;
    case "SH":
      colors = ['#999', '#ccc']
      break;
    case "SP":
    case "S+":
      colors = ['#FF4E6F', '#FAD126'] // S+
      break;
    case "S":
      colors = ['#EC6841', '#FF9800']
      break;
    case "A":
      colors = ['#31B16C', '#12B4B1']
      break;
    case "B":
      colors = ['#7776FF', '#4FACFE']
      break;
    case "C":
      colors = ['#9922EE', '#F772D1']
      break;
    case "D":
      colors = ['#D32F2F', '#FD5392']
      break;
    case "F":
      colors = ['#666', '#999']
      break;
    case "FC":
      colors = ['#4FACFE', '#00F2FE']
      break;
    default:
      colors = ['#2A2226', '#2A2226'];
  }

  return colors
})

const fullSrc = ref('')

const toggleModal = (e) => {
  e.preventDefault()
  e.stopPropagation()

  // 1. 定义新网址 (替换为你需要的 URL 规则)
  const sid = props.sid?.toString() ?? '0'

  // 2. 先尝试加载新网址
  fullSrc.value = `https://assets.ppy.sh/beatmaps/${sid}/covers/fullsize.jpg`
  isModalOpen.value = true
}

// 新增：处理图片加载错误的函数
const handleModalImgError = () => {
  console.warn("新图片加载失败，正在回退到原始图片...")
  // 如果新网址加载失败，退回到现有的 imgSrc
  if (fullSrc.value !== imgSrc.value) {
    fullSrc.value = imgSrc.value
  }
}

</script>

<template>
  <a :href="targetUrl" target="_blank" class="data-card-container" title="访问谱面网页">
    <span class="card-canvas">
      <span class="color-rect" :style="{ backgroundColor: statusColor }"></span>

      <span class="extra-rect" :style="{ '--color-1': rankMarquee[0], '--color-2': rankMarquee[1] }">
        <span class="symbol-wrapper">
          <span class="mods-text" v-if="props.mods">+{{ props.mods }}</span>

          <span class="baseline-container">
            <span class="text-large">{{ props.performance ?? 0 }}</span>
            <span class="text-small">PP</span>
          </span>
        </span>
      </span>

      <span class="base-rect" :style="{ backgroundColor: '#2A2226' }"></span>

      <span class="background-rect" :style="{ backgroundImage: `url(${imgSrc})` }"></span>

      <span class="preview-rect" :style="{ backgroundImage: `url(${thumbSrc})` }"
           @click="toggleModal" title="查看完整背景">
        <span class="star-badge" v-if="props.star" :style="{ backgroundColor: statusColor }">
          {{ formattedStar }}
        </span>
        <span class="id-badge" v-if="props.bid" :style="{ backgroundColor: statusColor }">
          {{ props.bid }}
        </span>
      </span>

      <span class="text-content">
        <span class="part-a">{{ parsedData.title }}</span>
      </span>
      <span class="text-content-2">
        <span class="part-b" v-if="parsedData.artist && parsedData.creator">{{parsedData.artist + ' // ' + parsedData.creator}}</span>
      </span>
      <span class="text-content-3">
        <span class="part-c" v-if="parsedData.difficulty">[{{ parsedData.difficulty }}]{{ parsedData.statistics }}</span>
      </span>
    </span>
  </a>

  <ClientOnly>
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="isMounted && isModalOpen" class="image-modal-overlay" @click="isModalOpen = false">
          <div class="modal-content" @click.stop> <img
              :src="fullSrc"
              alt="Preview"
              class="full-image"
              @error="handleModalImgError"
          />
            <div class="close-btn" @click="isModalOpen = false">×</div>

            <div v-if="!fullSrc" class="loading-spinner">Loading...</div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<style scoped>

.data-card-container {
  display: block;
  width: 100%;
  max-width: 900px;
  min-width: 300px;
  aspect-ratio: 900 / 110;
  margin: clamp(8px, 2.222cqw, 20px) auto;
  text-decoration: none !important;
  /* 移到最外层 */
  border-radius: clamp(8px, 2.222cqw, 20px);
  overflow: hidden;
  container-type: inline-size;

  /* 参数含义：水平偏移(10px) 垂直偏移(10px) 模糊半径(20px) 阴影扩散(0) 颜色(透明黑) */
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);

  /* 为了让阴影在悬停时更有活力，也可以增加过渡 */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* 点击瞬间：缩小 */
.data-card-container:active {
  transform: scale(0.99);
  transition: transform 0.1s cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* 给背景图增加过渡 */
.background-rect, .preview-rect {
  transition: filter 0.3s ease, transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* 悬停时：背景变暗 + 图片微扩 */
.data-card-container:hover .background-rect {
  filter: brightness(0.6) contrast(1.1);
}

.data-card-container:hover .base-rect {
  filter: brightness(0.6) contrast(1.1);
}

/* 悬停时：预览图边缘发光 */
.data-card-container:hover .preview-rect {
  filter: brightness(1.1) contrast(1.1);
}

.data-card-container:hover .color-rect {
  filter: brightness(1.1) contrast(1.1);
}

.card-canvas {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  background: #2a2226;
}

/* 颜色矩形 */
.color-rect {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 21.77%;
  height: 100%;
  border-radius: clamp(8px, 2.222cqw, 20px);
  z-index: 3;
}

/* 调整背景图宽度，留出右侧空间 */
.background-rect {
  display: block;
  position: absolute;
  left: 14.889%;
  top: 0;
  width: 66.222%; /* 从 85% 缩减，为右侧留出约 12% 的空间 */
  height: 100%;
  border-radius: clamp(8px, 2.222cqw, 20px);
  background-size: cover;
  background-position: center;
  opacity: 0.2;
  z-index: 3;
  transition: filter 0.3s ease;
}

.base-rect {
  display: block;
  position: absolute;
  left: 14.889%;
  top: 0;
  width: 66.222%; /* 从 85% 缩减，为右侧留出约 12% 的空间 */
  height: 100%;
  border-radius: clamp(8px, 2.222cqw, 20px);
  background-size: cover;
  background-position: center;
  opacity: 1;
  z-index: 2;
  transition: filter 0.3s ease;
}

/* 新增：右侧独立矩形 */
.extra-rect {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: clamp(8px, 2.222cqw, 20px);
  z-index: 2;
  justify-content: flex-end;
  align-items: center;
  transition: filter 0.3s ease;
  box-shadow: -5px 0 15px rgba(0,0,0,0.2); /* 增加一点左侧阴影层次感 */

  --color-1: #1C1719;
  --color-2: #2A2226;

  /* 1. 平滑渐变设计：A -> B -> A 循环模式 */
  /* 使用 120deg 配合 background-position 实现视觉上的 30度角向右上移动 */
  background: linear-gradient(
      120deg,
      var(--color-1) 5%,
      var(--color-2) 50%,
      var(--color-1) 95%
  );

  /* 2. 拉大背景宽度，为位移留出空间 */
  background-size: 200% 100%;

  /* 3. 动画：4秒匀速无限循环 */
  animation: move-gradient 4s linear infinite;
}

/* 4. 定义 30度向右上方移动的动画 */
@keyframes move-gradient {
  0% {
    /* 起始位置 */
    background-position: 200% 50%;
  }
  100% {
    /* 移动到 200% 正好完成一个 A-B-A 的循环，实现无缝衔接 */
    background-position: 0 50%;
  }
}

/* 1. 精确对齐容器 */
.symbol-wrapper {
  position: absolute;
  left: 90.50%; /* 90.55% 锁定 815px */
  top: 48%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
/* 模组 */
.mods-text {
  display: block;
  position: absolute;
  /* 关键：定位在主容器中心线上方 */
  /* 如果想放下面，就把 bottom 换成 top */
  bottom: 78%;
  left: 50%;
  transform: translateX(-50%); /* 水平居中对齐 815px 线 */

  font-family: "Torus Bold", "Torus SemiBold", sans-serif;
  font-size: 2cqw;
  color: rgba(255, 255, 255, 0.9);
  white-space: nowrap;

  /* 距离下方文字的微调间距 */
  margin-bottom: 2px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

/* 内部对齐容器 */
.baseline-container {
  display: flex;
  align-items: baseline; /* 关键：基线对齐 */
  gap: 0.2cqw; /* 两个文字之间的间距 */
}

/* 大字样式 48px */
.text-large {
  color: white;
  font-family: "Torus SemiBold", sans-serif;
  font-size: 5.2cqw;
  font-weight: bold;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
  white-space: nowrap;
}

/* 小字样式 36px */
.text-small {
  color: rgba(255, 255, 255, 0.8);
  font-family: "Torus SemiBold", sans-serif;
  font-size: 3.8cqw;
  text-shadow: 0 1px 4px rgba(0,0,0,0.5);
  white-space: nowrap;
}

/* 悬停效果更新 */
.data-card-container:hover .extra-rect {
  filter: brightness(1.15);
}

.preview-rect {
  position: absolute;
  left: 2.22%;
  top: 0;
  width: 19.55%;
  height: 100%;
  display: flex;
  background-size: cover;
  background-position: center;
  border-radius: clamp(8px, 2.222cqw, 20px);
  z-index: 4;
}

.star-badge {
  position: absolute;
  top: 1cqw;
  left: 1cqw;

  background: rgba(0, 0, 0, 0.65); /* 半透明黑色背景 */
  color: #fff;
  font-family: "Torus Bold", "Torus SemiBold", sans-serif;
  font-size: 2cqw;

  /* 基础形状 */
  padding: 0.1cqw 1cqw 0.3cqw 1cqw;
  border-radius: 2cqw;

  /* 视觉层叠 */
  z-index: 6;
  pointer-events: none;

  /* 阴影：增加立体感，确保在亮色背景下也能看清 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

  /* 对齐 */
  display: flex;
  align-items: center;
  gap: 2px;
}

.id-badge {
  position: absolute;
  bottom: 1cqw;
  left: 1cqw;

  background: rgba(0, 0, 0, 0.65); /* 半透明黑色背景 */
  color: #fff;
  font-family: "Torus Bold", "Torus SemiBold", sans-serif;
  font-size: 2cqw;

  /* 基础形状 */
  padding: 0.1cqw 1cqw 0.3cqw 1cqw;
  border-radius: 2cqw;

  /* 视觉层叠 */
  z-index: 6;
  pointer-events: none;

  /* 阴影：增加立体感，确保在亮色背景下也能看清 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

  /* 对齐 */
  display: flex;
  align-items: center;
  gap: 2px;
}

@container (min-width: 0px) {
  .text-content {
    position: absolute;
    left: 23.55%;
    top: 0.8cqw;

    width: 55.555%;
    z-index: 5;

    font-family: "Torus SemiBold", sans-serif;
    font-size: 3.5cqw;
    line-height: 1;
    color: #ffffff;
    text-shadow: 0 2px 10px rgba(0,0,0,0.8);

    height: 4cqw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .text-content-2 {
    position: absolute;
    left: 23.55%;
    top: 5.1cqw;

    width: 55.555%;
    z-index: 5;

    font-family: "Torus SemiBold", sans-serif;
    font-size: 2.5cqw;
    line-height: 1;
    color: #aaaaaa;
    text-shadow: 0 2px 10px rgba(0,0,0,0.8);

    height: 3cqw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .text-content-3 {
    position: absolute;
    left: 23.55%;
    top: 8.4cqw;

    width: 55.555%;
    z-index: 5;

    font-family: "Torus SemiBold", sans-serif;
    font-size: 2.5cqw;
    line-height: 1;
    color: #aaaaaa;
    text-shadow: 0 2px 10px rgba(0,0,0,0.8);

    height: 3cqw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.data-card-container {
  container-type: inline-size;
}

/* 鼠标悬停在预览图上显示手型，暗示可点 */
.preview-rect {
  cursor: zoom-in;
}

/* 遮罩层 */
.image-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: zoom-out;
  backdrop-filter: blur(8px); /* 磨砂玻璃效果 */
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.full-image {
  display: block;
  max-width: 100%;
  max-height: 90vh;
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(0,0,0,0.5);
  /* 进阶：防止图片被拖拽 */
  user-select: none;
  -webkit-user-drag: none;
}

.close-btn {
  position: absolute;
  top: -40px;
  right: -40px;
  color: white;
  font-size: 30px;
  cursor: pointer;
}

/* 在 <style> 中添加 */
.modal-content {
  position: relative;
  min-width: 200px;
  min-height: 200px;
  background: rgba(255, 255, 255, 0.05); /* 占位背景 */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 确保关闭按钮在任何时候都可见 */
.close-btn {
  z-index: 10001;
}

</style>