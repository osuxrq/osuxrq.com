import { defineClientConfig } from "vuepress/client";
import { scaleImage } from "./scripts/image-scale";
import Beatmap from './components/Beatmap.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
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
  },
});
