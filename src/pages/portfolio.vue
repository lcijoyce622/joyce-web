<script setup>
//- 作品集
import { ref, watch } from 'vue';
import { deviceStore } from '@/stores/device.js';

import phone from '@/assets/phone.mp4';
import normal from '@/assets/normal.mp4';
import calculator from '@/assets/calculator.svg';
import chatroom from '@/assets/chatroom.svg';
import F2E from '@/assets/F2E.svg';
import todolist from '@/assets/todolist.svg';
import phoneRe from '@/assets/phone-re.svg';
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
.relithe
  .phone-area
    video(
      ref="phoneVideo"
      loop
      muted
      @mouseover="phonePlay"
      @mouseleave="phonePause"
    )
      source(:src="phone" type="video/mp4")
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
      source(:src="normal" type="video/mp4")
.product-area
  a.product-link.relithe-phone
    .product
      img(:src="phoneRe")
      .mask
        .mask-border 
          .description 使用Nuxt2開發公司平台專案，詳細demo請使用電腦瀏覽。
    .product-title Relithe 精品循環平台
  a.product-link(target="_blank" :href="`https://lcijoyce622.github.io/f2e-product/`")
    .product
      img(:src="F2E")
      .mask
        .mask-border 
          .description 參與The F2E，利用GreenSock Animation Platform製作動畫。
    .product-title The F2E 競賽作品
  a.product-link(target="_blank" :href="`https://lcijoyce622.github.io/Chat-Room/`")
    .product
      img(:src="chatroom")
      .mask
        .mask-border
          .description 使用Firebase Realtime Database製作Google帳號登入的簡易聊天室。
    .product-title ChatRoom
  a.product-link(target="_blank" :href="`https://lcijoyce622.github.io/Calculator-App-with-Vue3/`")
    .product
      img(:src="calculator")
      .mask
        .mask-border
          .description 使用vue3製作簡易計算機，並將結果儲存在LocalStorage。
    .product-title Calculator
  a.product-link(target="_blank" :href="`https://lcijoyce622.github.io/Todo-List-with-LocalStorage/`")
    .product
      img(:src="todolist")
      .mask
        .mask-border
          .description 新增、修改、刪除、分類todo-list，並將結果儲存在LocalStorage。
    .product-title TODO LIST
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
}
.phone-area {
  grid-area: phone;
}
.relithe-phone {
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
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
    display: none;
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
.product-area {
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  .product-link {
    text-decoration: none;
    
  }
  .product-title {
    padding-left: 10px;
    &:before {
      content: '▹ ';
      color: #55FFAD;
      font-size: 1.2rem;
    }
  }
  .product {
    position: relative;
    &:hover {
      transform: scale(1.1);
      transition: all 0.5s ease-in-out;
      z-index: 2;
      @media (max-width: 768px) {
        transform: none;
      }
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(21, 25, 36, 0.853);
      transition: all 0.5s ease-in-out;
      &:hover {
        opacity: 0; 
        @media (max-width: 768px) {
          opacity: 1; 
        }     
      }
      .mask-border {
        text-align: center;
        margin: 20px 20px;
        height: calc(100% - 40px);
        border-radius: 5px;
        border: 2px solid #55FFAD;
        border-radius: 5px;
        padding: 0 20px;
        position: relative;
        .description {
          padding: 0 10px;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translate(0, -50%);
        }
      }
    }
  }
}
a {
  color: unset;
  &:visited {
    color: unset;
  }
}
</style>