import { computed, reactive, readonly } from 'vue'

const getSavedVolume = () => {
    if (typeof window === 'undefined') return 0.4
    const saved = localStorage.getItem('global_audio_volume')
    return saved !== null ? parseFloat(saved) : 0.4
}

const state = reactive({
    src: '',
    title: '',
    isPlaying: false,
    volume: getSavedVolume(),
    playbackRate: 1,
})

/**
 * 当前音源地址（只读 computed）。
 *
 * 性能说明：整站有 2000+ 个 Beatmap / Score 卡片，如果它们都去依赖整个 state
 * （例如 `state.src`），那么任何一个字段变化（拖动音量、暂停等）都会唤醒全部卡片的
 * 计算属性与渲染副作用。这个 computed 只在 src 真正变化时才通知订阅者，
 * 卡片里判断「当前是否在播放」请优先使用它，而不是 state.src。
 */
export const currentSrc = computed(() => state.src)

export const useAudioStore = () => {
    const playAudio = (src, title = '未知音频', playbackRate = 1) => {
        // 1. 如果点击的是当前正在播放/加载的同音频
        if (state.src === src) {
            state.isPlaying = !state.isPlaying // 切换 播放 / 暂停 状态
            return
        }

        // 2. 如果是切换到一首新音频
        state.src = src
        state.title = title
        state.isPlaying = true
        state.playbackRate = playbackRate
    }

    const pauseAudio = () => {
        state.isPlaying = false
    }

    const setVolume = (val) => {
        if (typeof val !== 'number' || isNaN(val)) return

        const normalizedVal = Math.max(0, Math.min(1, val))
        state.volume = normalizedVal
        if (typeof window !== 'undefined') {
            localStorage.setItem('global_audio_volume', normalizedVal.toString())
        }
    }

    return {
        state: readonly(state),
        currentSrc,
        playAudio,
        pauseAudio,
        setVolume,
    }
}
