<script setup>
import { computed, ref, onMounted } from 'vue'
import LazyImage from "./LazyImage.vue";
import {getModInfo, getPlaybackRate, parseMods} from "../constants/mod.js";
import {useAudioStore} from "../constants/audioStore.js";
import {getStarColor} from "../constants/star.js";

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
  // 修改：支持传入数组 ['HD', 'HR'] 或字符串 "HDHR" / "HD, HR"
  mods: { type: [Array, String], default: () => [] },
  disabled: { type: [Boolean, String], default: false },
  color: { type: [String], default: null },
  alias: { type: [String], default: null },
})

const disabled = computed(() => {
  const d = props.disabled;
  if (d === 'false' || d === 0 || d === null || d === undefined || d === false) {
    return false;
  }
  return !!d;
})

const parsedMods = computed(() => parseMods(props.mods))

// =========================================================================

const thumbSrc = computed(() => {
  const official = `https://assets.ppy.sh/beatmaps/${props.sid}/covers/list.jpg`;
  const sayobot = `https://a.sayobot.cn/beatmaps/${props.sid}/covers/cover.webp`;
  return `url(${official}), url(${sayobot})`;
});

const imgSrc = computed(() => {
  const official = `https://assets.ppy.sh/beatmaps/${props.sid}/covers/cover.jpg`;
  const sayobot = `https://a.sayobot.cn/beatmaps/${props.sid}/covers/cover.webp`;
  return `url(${official}), url(${sayobot})`;
});

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

const statusColor = computed(() => getStarColor(props.star));

const backgroundColor = computed(() => {
  if (props.color != null && props.color.toString().startsWith('#')) {
    return props.color
  } else {
    return getStarColor(props.star)
  }
});

const pp = computed(() => {
  const p = Number.parseFloat(props.performance)
  if (props.performance != null && Number.isFinite(p)) {
    return "PP"
  } else {
    return ""
  }
})

const isModalOpen = ref(false)

const handleSayoNoVideoDownload = () => {
  const sid = props.sid?.toString() ?? '0'
  if (sid === '0') {
    alert("配置的谱面集编号无效，无法下载。")
    return
  }
  const downloadUrl = encodeURI(`https://dl.sayobot.cn/beatmaps/download/novideo/${sid}?server=auto`);
  window.open(downloadUrl, '_blank');
}

const handleSayoFullDownload = () => {
  const sid = props.sid?.toString() ?? '0'
  if (sid === '0') {
    alert("配置的谱面集编号无效，无法下载。")
    return
  }
  const downloadUrl = encodeURI(`https://dl.sayobot.cn/beatmaps/download/full/${sid}?server=auto`);
  window.open(downloadUrl, '_blank');
};

const formattedStar = computed(() => {
  const num = parseFloat(props.star?.toString());
  if (isNaN(num)) return '0';
  return (Math.floor(num * 10) / 10).toString();
})

const badgeTextStyle = computed(() => {
  const starNum = parseFloat(props.star);
  const minStar = 0.1;
  const maxStar = 4.0;

  if (!isNaN(starNum) && starNum >= minStar && starNum < maxStar) {
    return {
      color: '#1c1719',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
    };
  }

  return {
    color: '#ffffff',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
  };
});

const rankBackground = computed(() => {
  let colors = '/images/rank/'

  switch (props.rank?.toUpperCase()) {
    case "PF": case "XH": case "SSH": case "EX": case "X+":
      colors += 'XH'; break;
    case "X": case "SS":
      colors += 'X'; break;
    case "SH": case "SP": case "S+":
      colors += 'SH'; break;
    case "S":
      colors += 'S'; break;
    case "A":
      colors += 'A'; break;
    case "B":
      colors += 'B'; break;
    case "C":
      colors += 'C'; break;
    case "D":
      colors += 'D'; break;
    case "F":
      colors += 'F'; break;
    default:
      return '';
  }
  return colors + '.svg'

})

const rankMarquee = computed(() => {
  let colors
  switch (props.rank?.toUpperCase()) {
    case "PF": case "XH": case "SSH": case "EX": case "X+":
      colors = ['#ccc', '#fafafa']; break;
    case "X": case "SS":
      colors = ['#FFC86B', '#FFFF00']; break;
    case "SH":
      colors = ['#999', '#ccc']; break;
    case "SP": case "S+":
      colors = ['#FF4E6F', '#FAD126']; break;
    case "S":
      colors = ['#EC6841', '#FF9800']; break;
    case "A":
      colors = ['#31B16C', '#12B4B1']; break;
    case "B":
      colors = ['#7776FF', '#4FACFE']; break;
    case "C":
      colors = ['#9922EE', '#F772D1']; break;
    case "D":
      colors = ['#D32F2F', '#FD5392']; break;
    case "F":
      colors = ['#666', '#999']; break;
    default:
      colors = ['#2A2226', '#2A2226'];
  }
  return colors
})

const fullSrc = ref('')
const fallbackUrls = ref([]);
const currentFallbackIndex = ref(0);

const toggleModal = (e) => {
  e.preventDefault();
  e.stopPropagation();

  const sid = props.sid?.toString() ?? '0';

  fallbackUrls.value = [
    `https://assets.ppy.sh/beatmaps/${sid}/covers/fullsize.jpg`,
    `https://a.sayobot.cn/beatmaps/${sid}/covers/cover.webp`,
    imgSrc.value
  ];

  currentFallbackIndex.value = 0;
  fullSrc.value = fallbackUrls.value[0];
  isModalOpen.value = true;
};

const handleModalImgError = () => {
  if (currentFallbackIndex.value < fallbackUrls.value.length - 1) {
    currentFallbackIndex.value++;
    console.warn(`图片加载失败，正在尝试备选源 ${currentFallbackIndex.value}: ${fallbackUrls.value[currentFallbackIndex.value]}`);
    fullSrc.value = fallbackUrls.value[currentFallbackIndex.value];
  } else {
    console.error("所有图片源均加载失败");
  }
};

const textRight = computed(() => {
  return parsedMods.value.length === 0 ? '30%' : '40%'
})

// 试听组件
const { state, playAudio } = useAudioStore()

const currentAudioUrl = computed(() => {
  const sid = props.sid?.toString() ?? '0'
  return sid !== '0' ? `https://b.ppy.sh/preview/${sid}.mp3` : ''
})

// 判断当前卡片是否正在播放
const isCurrentPlaying = computed(() => {
  return state.src === currentAudioUrl.value && state.isPlaying
})


const playbackRate = computed(() => getPlaybackRate(parsedMods.value))

// 点击触发播放/暂停
const handlePreviewPlay = () => {
  if (!currentAudioUrl.value) return

  const alias = props.alias ? ` (${props.alias || ''})` : ''

  const audioTitle = parsedData.value.title
      ? `${parsedData.value.artist || ''} - ${parsedData.value.title}${alias}`
      : `Beatmap ${props.sid}`

  playAudio(currentAudioUrl.value, audioTitle, playbackRate.value)
}

</script>

<template>
  <a :href="targetUrl" target="_blank" class="data-card-container" title="访问谱面网页">
    <span class="card-canvas">
      <span class="download-group">
        <!-- Mods 显示区域矩形 (置于下载按钮左侧) -->
        <span v-if="parsedMods.length" class="mods-box" title="启用模组">
          <span
              v-for="(mod, index) in parsedMods"
              :key="mod"
              class="mod-badge"
              :style="{
              backgroundColor: getModInfo(mod).bg,
              color: getModInfo(mod).color,
              zIndex: index + 1, /* 右侧（Index 大）的在最上层 */
              right: `${(parsedMods.length - 1 - index) * 55}%` /* 右对齐计算：最右侧为 0%，越靠左偏移越大 */
            }"
              :title="`${getModInfo(mod).name} (${mod})`"
          >
            {{ mod }}
          </span>
        </span>

        <span class="download-icon official" @click.stop.prevent="handleSayoNoVideoDownload" title="使用 Sayobot 下载谱面（不包含视频）">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17.5a4 4 0 01-.88-7.903A5 5 0 1115.9 7.5L16 7.5a5 5 0 011 9.9M15 14.5l-3 3m0 0l-3-3m3 3V11.5"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <span class="download-icon sayo" @click.stop.prevent="handleSayoFullDownload" title="使用 Sayobot 下载谱面">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15V3m0 12l-4-4m4 4l4-4M4 17v1a2 2 0 002 2h12a2 2 0 002-2v-1"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </span>

      <span class="color-rect" :style="{ backgroundColor: backgroundColor }"></span>

      <span class="extra-rect" :style="{ '--color-1': rankMarquee[0], '--color-2': rankMarquee[1] }">
        <span
            v-if="rankBackground"
            class="decoration-rect"
            :style="{
              maskImage: `url(${rankBackground})`,
              WebkitMaskImage: `url(${rankBackground})`
            }"
        ></span>

        <span class="symbol-wrapper">
          <span class="baseline-container">
            <span class="text-large">{{ props.performance ?? 0 }}</span>
            <span class="text-small">{{ pp }}</span>
          </span>
        </span>
      </span>

      <span class="base-rect" :style="{ backgroundColor: '#2A2226' }"></span>

      <span class="star-badge" v-if="props.star" :style="[{ backgroundColor: statusColor }, badgeTextStyle]">
        {{ formattedStar }}
      </span>
      <span class="id-badge" v-if="props.bid || props.sid" :style="[{ backgroundColor: statusColor }, badgeTextStyle]">
        {{ props.bid || `s${props.sid}` }}
      </span>

      <LazyImage
          :src="imgSrc"
          class="background-rect"
      />

      <LazyImage
          :class="{ 'is-disabled': props.disabled }"
          :src="thumbSrc"
          class="preview-rect"
          title="查看完整背景"
          @click="toggleModal"
      >
        <!-- 试听按钮 -->
       <span
           class="preview-play-btn"
           @click.stop.prevent="props.sid && !disabled && handlePreviewPlay()"
           :title="props.sid ? (disabled ? '谱面已被禁用，无法试听' : (isCurrentPlaying ? '暂停试听' : `试听 ${parsedData.title || props.sid}`)) : '谱面不可用'"
       >
        <!-- 状态 1: 正在播放中，显示暂停图标 -->
        <svg v-if="isCurrentPlaying" viewBox="0 0 24 24" :fill="statusColor" class="pause-icon">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        </svg>

         <!-- 状态 2: 未播放/已暂停，显示播放图标 -->
        <svg v-else viewBox="0 0 24 24" fill="currentColor" class="play-icon">
          <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"/>
        </svg>
      </span>
      </LazyImage>

      <span class="text-content" :style="{ right: textRight }">
        <span class="part-a">{{ parsedData.title }}</span>
        <span v-if="props.alias" class="alias-badge">{{ props.alias }}</span>
      </span>
      <span class="text-content-2" :style="{ right: textRight }">
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
          <div class="modal-content">
            <img
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
  margin: clamp(8px, 2.222cqw, 20px) auto 0;
  text-decoration: none !important;
  border-radius: clamp(8px, 2.222cqw, 20px);
  overflow: hidden;
  container-type: inline-size;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.data-card-container:active {
  transform: scale(0.99);
  transition: transform 0.1s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.background-rect, .preview-rect {
  transition: filter 0.3s ease, transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.data-card-container:hover .background-rect {
  filter: brightness(0.6) contrast(1.1);
}

.data-card-container:hover .base-rect {
  filter: brightness(0.6) contrast(1.1);
}

.data-card-container:hover .preview-rect {
  filter: saturate(1.4) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2));
  transition: filter 0.3s ease;
}

.data-card-container:hover .color-rect {
  filter: brightness(1.1) contrast(1.1);
}

.data-card-container:hover .id-badge {
  filter: brightness(1.1) contrast(1.1);
}

.data-card-container:hover .star-badge {
  filter: brightness(1.1) contrast(1.1);
}

.card-canvas {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  background: #2a2226;
}

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

.background-rect {
  display: block;
  position: absolute;
  left: 14.889%;
  top: 0;
  width: 66.222%;
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
  width: 66.222%;
  height: 100%;
  border-radius: clamp(8px, 2.222cqw, 20px);
  background-size: cover;
  background-position: center;
  opacity: 1;
  z-index: 2;
  transition: filter 0.3s ease;
}

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
  box-shadow: -5px 0 15px rgba(0,0,0,0.2);

  --color-1: #1C1719;
  --color-2: #2A2226;

  background: linear-gradient(
      120deg,
      var(--color-1) 5%,
      var(--color-2) 50%,
      var(--color-1) 95%
  );
  background-size: 200% 100%;
  animation: move-gradient 4s linear infinite;
}

@keyframes move-gradient {
  0% { background-position: 200% 50%; }
  100% { background-position: 0 50%; }
}

.symbol-wrapper {
  position: absolute;
  left: 90.50%;
  top: 48%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.baseline-container {
  display: flex;
  align-items: baseline;
  gap: 0.2cqw;
}

.text-large {
  color: white;
  font-family: "Torus SemiBold", "Alibaba PuHuiTi Regular", sans-serif;
  font-size: 5.2cqw;
  font-weight: bold;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
  white-space: nowrap;
}

.text-small {
  color: rgba(255, 255, 255, 0.8);
  font-family: "Torus SemiBold", "Alibaba PuHuiTi Regular", sans-serif;
  font-size: 3.8cqw;
  text-shadow: 0 1px 4px rgba(0,0,0,0.5);
  white-space: nowrap;
}

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
  left: 3.444cqw;
  background: rgba(0, 0, 0, 0.65);
  color: #fff;
  font-family: "Torus Bold", "Torus SemiBold", "Alibaba PuHuiTi Regular", sans-serif;
  font-size: 2cqw;
  padding: 0.1cqw 1cqw 0.4cqw 1cqw;
  border-radius: 2cqw;
  z-index: 6;
  pointer-events: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  gap: 2px;
}

.id-badge {
  position: absolute;
  bottom: 1cqw;
  left: 3.444cqw;
  background: rgba(0, 0, 0, 0.65);
  color: #fff;
  font-family: "Torus Bold", "Torus SemiBold", "Alibaba PuHuiTi Regular", sans-serif;
  font-size: 2cqw;
  padding: 0.1cqw 1cqw 0.4cqw 1cqw;
  border-radius: 2cqw;
  z-index: 6;
  pointer-events: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  gap: 2px;
}

@container (min-width: 0px) {
  /* 调整标题与第二行右边缘至 44%，为 Mods 专属矩形保留安全空间 */
  .text-content {
    position: absolute;
    left: 23.55%;
    top: 0;
    right: 40%;
    z-index: 4;
    height: 5cqw;
    display: flex;
    align-items: center;
    gap: 0.8cqw;
  }

  .part-a {
    font-family: "Torus SemiBold", "Alibaba PuHuiTi Regular", sans-serif;
    font-size: 3.5cqw;
    line-height: 1.1;
    color: #ffffff;
    text-shadow: 0 2px 10px rgba(0,0,0,0.8);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 1;
  }

  .alias-badge {
    flex-shrink: 0;
    font-family: "Torus SemiBold", "Alibaba PuHuiTi Regular", sans-serif;
    font-size: 2cqw;
    font-style: italic;
    color: #aaa;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    transform: translateY(0.6cqw);
  }

  .text-content-2 {
    position: absolute;
    left: 23.55%;
    top: 5.1cqw;
    right: 40%; /* 与第一行保持一致 */
    z-index: 5;
    font-family: "Torus SemiBold", "Alibaba PuHuiTi Regular", sans-serif;
    font-size: 2.5cqw;
    line-height: 1;
    color: #aaaaaa;
    text-shadow: 0 2px 10px rgba(0,0,0,0.8);
    height: 3cqw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* 第 3 行不被 Mods 矩形占用，保持原有尺寸即可 */
  .text-content-3 {
    position: absolute;
    left: 23.55%;
    top: 8.4cqw;
    width: 55.555%;
    z-index: 5;
    font-family: "Torus SemiBold", "Alibaba PuHuiTi Regular", sans-serif;
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

.preview-rect {
  cursor: zoom-in;
}

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
  backdrop-filter: blur(8px);
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.full-image {
  display: block;
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(0,0,0,0.5);
  user-select: none;
  -webkit-user-drag: none;
}

.close-btn {
  position: absolute;
  top: -1cqw;
  right: -2.5cqw;
  color: white;
  font-size: 40px;
  cursor: pointer;
  align-content: baseline;
  z-index: 10001;
}

.close-btn:hover {
  scale: 1.4;
}

/* --- 下载与 Mods 按钮组容器 --- */
.download-group {
  position: absolute;
  top: 1.2cqw;
  right: 20%;
  display: flex;
  align-items: flex-start; /* 顶部对齐 */
  gap: 0.8cqw; /* Mods 矩形与下载按钮间距，和按钮内部间距完全一致 */
  z-index: 15;
}

/* 下载图标基础样式 */
.download-icon {
  position: relative;
  width: clamp(25px, 4.444cqw, 60px);
  height: clamp(25px, 4.444cqw, 60px);
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
  top: -5px;
  bottom: -5px;
  left: -5px;
  right: -5px;
}

.download-icon:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #ffcc22;
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.download-icon svg {
  width: 60%;
  height: 60%;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.3));
}

/* --- Mods 右对齐容器 --- */
.mods-box {
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;

  height: clamp(25px, 4.444cqw, 60px);
  width: clamp(30px, 5cqw, 68px);

  /* 右侧与下载按钮保持适当间距，无需向右预留伸展边距 */
  margin-right: 0.4cqw;
  display: inline-flex;
  align-items: center;

  background: transparent;
  border: none;
  padding: 0;
}

/* --- 单个 Mod 扑克牌（右对齐定位） --- */
.mod-badge {
  position: absolute;
  top: 0;
  box-sizing: border-box;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: clamp(25px, 4.444cqw, 60px);
  width: clamp(30px, 5cqw, 68px);

  border-radius: clamp(8px, 1.667cqw, 15px);
  border: 1px solid rgba(255, 255, 255, 0.25);

  font-family: "Torus Bold", "Torus SemiBold", "Alibaba PuHuiTi Regular", sans-serif;
  font-size: clamp(13px, 2.3cqw, 23px);
  font-weight: 900;
  line-height: 1;

  /* 改为左侧阴影，配合向左叠放效果 */
  box-shadow: -3px 2px 8px rgba(0, 0, 0, 0.45);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);

  cursor: help;
  user-select: none;
  white-space: nowrap;
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.2s ease, box-shadow 0.2s ease;
}

.mods-box:hover .mod-badge {
  filter: brightness(1.08);
}

/* 单个 Hover：保持右对齐原位向上弹起，放大置顶 */
.mod-badge:hover {
  z-index: 100 !important;
  transform: translateY(-4px) scale(1.08);
  box-shadow: -4px 6px 14px rgba(0, 0, 0, 0.6);
  filter: brightness(1.2) !important;
}

.modal-content {
  position: relative;
  min-width: 128px;
  min-height: 72px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 无法下图 */

.preview-rect.is-disabled {
  filter: brightness(0.4)
}

.data-card-container:hover .preview-rect.is-disabled {
  filter: brightness(0.2) !important;
  transform: none !important; /* 取消放大效果 */
  box-shadow: none !important; /* 取消发光效果 */
}

.is-disabled {
  cursor: default;
}

/* --- 动画过渡 --- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active .modal-content {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.fade-leave-active .modal-content {
  transition: transform 0.2s ease-in;
}

.fade-enter-from .modal-content,
.fade-leave-to .modal-content {
  transform: scale(0.9) translateY(20px);
}

/* --- extra-rect 内部右下角倾斜装饰块 --- */
/* --- extra-rect 内部右下角 SVG 倾斜装饰块 --- */
.decoration-rect {
  position: absolute;
  right: -2%;
  bottom: -40%;

  mix-blend-mode: overlay;

  width: 16cqw;
  height: 16cqw;

  /* 1. 使用白色作为基色，透明度设为 0.1 */
  background-color: #ffffff;
  opacity: 0.3;
  pointer-events: none;

  /* 2. 将计算得到的 SVG 文件作为 Mask 遮罩 */
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;

  transform-origin: 0 0;
  transform: rotate(-10deg);

  /* 4. 层级设为 1，位于 extra-rect 内部，文字 (.symbol-wrapper z-index:10) 下方 */
  z-index: 1;
}

/* 试听按钮样式 */
.preview-play-btn {
  position: absolute;
  /* 减去 preview-rect 的 left 偏移后，完美契合 id-badge 的实际相对边距 */
  right: 1.224cqw;
  bottom: 1cqw;

  /* 直径等同于 id-badge 的高度 */
  width: clamp(20px, 3.5cqw, 60px);
  height: clamp(20px, 3.5cqw, 60px);
  border-radius: 50%; /* 圆形 */

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  cursor: pointer;
  z-index: 6;
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
}

/* 扩展手势点击感应区 */
.preview-play-btn::after {
  content: '';
  position: absolute;
  top: -5px;
  bottom: -5px;
  left: -5px;
  right: -5px;
}

/* Hover 与点击状态 */
.preview-play-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  color: #ffcc22;
  transform: scale(1.1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
}

.preview-play-btn:active {
  transform: scale(0.95);
}

/* SVG 播放图标微调居中 */
.preview-play-btn svg {
  width: 68%;
  height: 68%;

  margin-left: 0;

  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4));
}

/* 试听按钮禁用样式 */
.preview-play-btn.is-disabled {
  cursor: not-allowed;
  opacity: 0.4;
  pointer-events: auto; /* 确保 hover 时能看到 not-allowed 鼠标指针和 title 提示 */
}

/* 禁用状态下取消 Hover 放大与颜色改变等交互效果 */
.preview-play-btn.is-disabled:hover {
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  transform: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.preview-play-btn.is-disabled:active {
  transform: none;
}
</style>