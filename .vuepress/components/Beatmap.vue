
<script setup>
import {computed, onMounted, ref} from 'vue'

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

  if (match) {
    return {
      artist: match[1]?.trim(), // yandere
      title: match[2]?.trim(), // fall from grace
      creator: match[3]?.trim(), // Chrisse
      difficulty: match[4]?.trim(),  // [4K] afterimage
      bid: props.bid?.toString() ?? '0',
      mode: mode
    };
  } else {
    return {
      artist: str.toString(),
      title: '',
      creator: '',
      difficulty: '',
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

const isModalOpen = ref(false) // 控制模态框显示

const handleOfficialDownload = () => {
  const sid = props.sid?.toString() ?? '0'

  // 构建目标网址
  const downloadUrl = encodeURI(`https://osu.ppy.sh/beatmapsets/${sid}/download`) ;

  // 在新窗口打开链接
  window.open(downloadUrl, '_blank');
}

const handleSayoDownload = () => {
  const v = parsedData.value ?? {}
  const sid = props.sid?.toString() ?? '0'

  const title = v.title?.trim() ?? '';
  const artist = v.artist?.trim() ?? '';

  let filename

  if (title && artist) {
    filename = `${sid} ${artist} - ${title}`.replace(/[\\/:*?"<>|]/g, '')
  } else {
    filename = sid.toString()
  }

  let path1
  let path2

  if (sid.length >= 4) {
    path1 = parseInt(sid.slice(0, -4), 10)
    path2 = parseInt(sid.slice(-4), 10)
  } else {
    path1 = 0
    path2 = parseInt(sid, 10)
  }

  // 构建目标网址
  const downloadUrl = encodeURI(`https://cmcc.sayobot.cn:25225/beatmaps/${path1}/${path2}/full?filename=${filename}`) ;

  // 在新窗口打开链接
  window.open(downloadUrl, '_blank');
};

// 显示星数
const formattedStar = computed(() => {
  const num = parseFloat(props.star?.toString());
  if (isNaN(num)) return '0';

  return Number(num.toFixed(1)).toString();
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

      <span class="download-group">
        <span class="download-icon official" @click.stop.prevent="handleOfficialDownload" title="使用官方渠道下载谱面">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17.5a4 4 0 01-.88-7.903A5 5 0 1115.9 7.5L16 7.5a5 5 0 011 9.9M15 14.5l-3 3m0 0l-3-3m3 3V11.5"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>

        <span class="download-icon sayo" @click.stop.prevent="handleSayoDownload" title="使用 Sayobot 下载谱面">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15V3m0 12l-4-4m4 4l4-4M4 17v1a2 2 0 002 2h12a2 2 0 002-2v-1"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </span>

      <span class="color-rect" :style="{ backgroundColor: statusColor }"></span>

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
        <span class="part-c" v-if="parsedData.difficulty">{{`[${parsedData.difficulty}]`}}</span>
      </span>
      <span class="text-content-4">
        <span class="part-d" v-if="parsedData.mode">{{ parsedData.mode }}</span>
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
  z-index: 1;
}

/* 底板矩形: x=176, width=724 -> left: (176/900)*100%, width: (724/900)*100% */
.background-rect {
  display: block;
  position: absolute;
  left: 14.889%;
  top: 0;
  width: 85.111%;
  height: 100%;
  border-radius: clamp(8px, 2.222cqw, 20px);
  background-size: cover;
  background-position: center;
  opacity: 0.2;
  z-index: 2;
}

.base-rect {
  position: absolute;
  left: 14.889%;
  top: 0;
  width: 85.111%;
  height: 100%;
  border-radius: clamp(8px, 2.222cqw, 20px);
  background-size: cover;
  background-position: center;
  opacity: 1;
  z-index: 2;
  transition: filter 0.3s ease;
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
  z-index: 3;
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
  z-index: 5;
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
  z-index: 5;
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

    width: 62%;
    z-index: 4;

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

    width: 62%;
    z-index: 4;

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

    width: 62%;
    z-index: 4;

    font-family: "Torus SemiBold", "Torus SemiBold", sans-serif;
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

.text-content-4 {
  text-align: right;

  position: absolute;
  right: 1.67%;
  top: 8.4cqw;

  width: auto;
  white-space: nowrap;
  overflow: visible;
  z-index: 4;

  font-family: "Torus SemiBold", sans-serif;
  font-size: 2.5cqw;
  line-height: 1;
  color: #aaaaaa;
  text-shadow: 0 2px 10px rgba(0,0,0,0.8);
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

/* 新增：下载按钮组容器 */
.download-group {
  position: absolute;
  top: 1.2cqw;
  right: 1.2cqw;
  display: flex;
  gap: 0.8cqw;
  z-index: 10;
}

/* 下载图标 */
.download-icon {
  position: relative;
  /* 语法：clamp(最小值, 首选值, 最大值) */
  width: clamp(25px, 4.444cqw, 60px);
  height: clamp(25px, 4.444cqw, 60px);

  /* 圆角也需要相应固定，防止变成奇怪的形状 */
  border-radius: clamp(8px, 1.667cqw, 15px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(4px);
}

.download-icon::after {
  content: '';
  position: absolute;
  top: -5px;  /* 向四周延伸 10px 的感应范围 */
  bottom: -5px;
  left: -5px;
  right: -5px;
  /* background: rgba(255,0,0,0.3); 调试时可以打开看热区范围 */
}

/* 可选：给第二个下载按钮一点颜色区分 */
.download-icon.secondary:hover {
  color: #66ccff; /* 比如用天蓝色区分原来的黄色 */
}

.download-icon:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #ffcc22;
  transform: translateY(-1px); /* 微小的向上浮动效果 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.download-icon svg {
  width: 60%; /* 稍微缩小图标比例，看起来更精致 */
  height: 60%;
  /* 增加一个小阴影让图标在浅色背景图上更清晰 */
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.3));
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