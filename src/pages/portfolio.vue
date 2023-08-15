<script setup>
import { ref, watch } from 'vue';
import { deviceStore } from '@/stores/device.js';

import phoneDemo from '@/assets/phoneDemo.mp4';
import normalDemo from '@/assets/normalDemo.mp4';
const store = deviceStore()
const phoneVideo =  ref(null);
const normalVideo =  ref(null);
function phonePlay() {
  phoneVideo.value.play();
}
function phonePause() {
  if(store.deviceIsMobile) return;
  phoneVideo.value.pause();
}
function normalPlay() {
  normalVideo.value.play();
}
function normalPause() {
  if(store.deviceIsMobile) return;
  normalVideo.value.pause();
}
//- 監聽裝置大小來自動播放
watch(() => store.deviceIsMobile, (val) => {
  if(val) {
    phonePlay();
    normalPlay();
  } else {
    phonePause();
    normalPause();
  }
})
</script>

<template lang='pug'>
h1 {{ `／／／／／／／／／／／⚠️ 施工中 ⚠️／／／／／／／／／／` }}
.relithe
  .phone-area
    video(
      ref="phoneVideo"
      loop
      muted
      @mouseover="phonePlay"
      @mouseleave="phonePause"
    )
      source(:src="phoneDemo" type="video/mp4")
  .text-area
    .title Relithe 精品循環平台
    p 與泰爾科技團隊共同打造及維護的精品循環平台，提供用戶瀏覽、搜尋、分享及購買商品的功能，並且能夠透過後台管理系統管理商品、訂單、用戶、折扣碼、活動及網站內容。
  .web-area
    video(
      ref="normalVideo"
      loop
      muted
      @mouseover="normalPlay"
      @mouseleave="normalPause"
    )
      source(:src="normalDemo" type="video/mp4")
</template>

<style lang="scss" scoped>
.text-area {
  padding: 10px 0;
  text-align: center;
  grid-area: title;
  .title {
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
}
.web-area {
  grid-area: normal;
}
.phone-area {
  grid-area: phone;
}
.relithe {
  padding: 50px;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 20% 80%;
  grid-template-areas: "phone title "
                       "phone normal";
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 50px 20px;
    gap: 10px;
  }
  video {
    width: 100%;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    border-radius: 10px;
    filter: brightness(0.3);
    @media (max-width: 768px) {
      filter: brightness(1);
    }
    &:hover {
      filter: brightness(1);
    }
  }
}

</style>