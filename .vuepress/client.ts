import {defineClientConfig} from "@vuepress/client";
import {scaleImage} from "./scripts/image-scale";
import "./styles/index.css";
import Beatmap from './components/Beatmap.vue'
import Score from "./components/Score.vue";
import Player from "./components/Player.vue";
import Pool from "./components/Pool.vue";
import LazyImage from "./components/LazyImage.vue";
import GlobalAudioPlayer from "./components/GlobalAudioPlayer.vue";
import Timeline from "./components/Timeline.vue";
import EasyCard from "./components/EasyCard.vue";
import EasyWallet from "./components/EasyWallet.vue";


export default defineClientConfig({

    setup() {

    },

    rootComponents: [
        // 直接传入播放器组件，VuePress 会自动将其挂载为根节点的全局组件
        GlobalAudioPlayer,
    ],

    enhance({app, router, siteData}) {
        router.beforeEach((to) => {
            // console.log('before navigation')
        });

        router.afterEach((to) => {
            setTimeout(() => {
                scaleImage();
                // console.log('after navigation');
            }, 500); // wait for the page to be fully rendered
        });

        app.component('Beatmap', Beatmap)
        app.component('Score', Score)
        app.component('Player', Player)
        app.component('Pool', Pool)
        app.component('LazyImage', LazyImage)
        app.component('GlobalAudioPlayer', GlobalAudioPlayer)
        app.component('Timeline', Timeline)
        app.component('EasyCard', EasyCard)
        app.component('EasyWallet', EasyWallet)
    },
});
