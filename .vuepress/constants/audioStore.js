import { reactive, readonly } from 'vue'

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
})

export const useAudioStore = () => {
    const playAudio = (src, title = '未知音频') => {
        // 1. 如果点击的是当前正在播放/加载的同音频
        if (state.src === src) {
            state.isPlaying = !state.isPlaying // 切换 播放 / 暂停 状态
            return
        }

        // 2. 如果是切换到一首新音频
        state.src = src
        state.title = title
        state.isPlaying = true
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
        playAudio,
        pauseAudio,
        setVolume,
    }
}