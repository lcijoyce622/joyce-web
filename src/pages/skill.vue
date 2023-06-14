<script setup>
import circleProgress from "@/components/circleProgress.vue";
import { onMounted, onBeforeUnmount, ref } from 'vue';
import VanillaTilt from 'vanilla-tilt';
const vueChart =  ref(null);
const nuxtChart =  ref(null);
const frontendChart =  ref(null);
const vuePercent = ref(0);
const nuxtPercent = ref(0);
const vueMax = 75;
const nuxtMax = 70;
const timer = setInterval(() => {
  
  if(vuePercent.value >= vueMax && nuxtPercent.value >= nuxtMax) { clearInterval(timer); return};
  vuePercent.value = vuePercent.value + vueMax / 20;
  nuxtPercent.value = nuxtPercent.value + nuxtMax / 20;

}, 100);
onBeforeUnmount(() => {
  clearInterval(timer);
});
onMounted(() => {
  VanillaTilt.init(vueChart.value, { max: 25, speed: 400 });
  VanillaTilt.init(nuxtChart.value, { max: 25, speed: 400 });
  VanillaTilt.init(frontendChart.value, { max: 25, speed: 400 });
})
const logoObj = {
  html: new URL(`../assets/html5.svg`, import.meta.url).href,
  vue: new URL(`../assets/vue.svg`, import.meta.url).href,
  nuxt: new URL(`../assets/nuxt.svg`, import.meta.url).href,
  frontend: new URL(`../assets/frontend.png`, import.meta.url).href,
  pug: new URL(`../assets/pug.png`, import.meta.url).href,
  sass: new URL(`../assets/sass.svg`, import.meta.url).href,
  css: new URL(`../assets/css.svg`, import.meta.url).href,
}
</script>

<template lang='pug'>
.gauge-chart-area
  .vue-chart(ref="vueChart")
    img.logo(:src="logoObj.vue")
    .progress
      .skill-circle
        circleProgress(:percent="vuePercent" custom-text="VUE" :color="`#55FFAD`")
    .desc-area
      .desc Vue是一個流行的 JavaScript 前端框架，簡潔易學的語法和靈活的組件化架構，能夠輕鬆地構建交互性強、高效的網頁應用程序。
      .skill-tag
        .tag(v-for='item of ["Vue Router", "Vue 2", "Vue 3", "Vuex", "Pinia", "Vue CLI", "Composition API", "Option API"]' :key='item') {{ `# ${item}` }}
  .nuxt-chart(ref="nuxtChart")
    img.logo(:src="logoObj.nuxt")
    .progress
      .skill-circle
        circleProgress(:percent="nuxtPercent" custom-text="NUXT" :color="`#55FFAD`")
    .desc-area
      .desc Nuxt是基於Vue.js的通用性應用框架，提供了許多內建功能，如伺服器端渲染、路由管理和狀態管理，能夠加快Vue應用的開發速度並優化SEO效果。
      .skill-tag
        .tag(v-for='item of ["Nuxt.js", "SPA", "SSR", "SEO"]' :key='item') {{ `# ${item}` }}
  .frontend-chart(ref="frontendChart")
    img.logo(:src="logoObj.frontend")
    .skill-circle
      circleProgress(:percent="50")

</template>

<style lang="scss" scoped>

.skill-circle {
  position: relative;
  width: 100px;
  height: 100px;
}
.gauge-chart-area {
  margin: 100px;
  display: grid;
  justify-content: center;
  gap: 120px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "vue nuxt" "frontend frontend";
  .card {
    position: relative;
    width: 100%;
    // margin: 0 20px;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 20px;
    background: linear-gradient(160deg, #907d83b7, #20288587);
    &:hover {
      box-shadow: 0 0 10px 0px #f9f9f9;
      .logo {
        // border-radius: 50%;
        transform: scale(1);
      }
    }
    .logo {
      transform: scale(0.8);
      width: 100px;
      height: 100px;
      position: absolute;
      top: -40px;
      left: -40px;
      transition: all 0.3s ease-in-out;
    }
  }
  .desc-area {
    .desc {
      font-size: 1rem;
      margin-bottom: 15px;
    }
    .skill-tag {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 10px;
      .tag {
        font-size: 0.8rem;
        padding: 2px 10px;
        border: 2px solid #55FFAD;
        color: #55FFAD;
        border-radius: 10px;
  
      }
    }
  }
  .progress {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .vue-chart {
    @extend .card;
    grid-area: vue;
    display: grid;
    grid-template-columns: 100px 1fr;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    
  }
  .nuxt-chart {
    @extend .card;
    grid-area: nuxt;
    display: grid;
    grid-template-columns: 100px 1fr;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    // background-color: rgb(30, 163, 106);

  }
  .frontend-chart {
    @extend .card;
    grid-area: frontend;
    // background-color: rgb(234, 227, 23);

  }

}
</style>
