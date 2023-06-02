<script setup>
import fullIcon from "@/assets/Group 5.svg"
import small from "@/assets/Rectangle.svg"
import close from "@/assets/close.svg"
import { Dialog } from "@/plugins/dialog/index.js";


function CloseFlow () {
  DialogTest();
}
const DialogTest = async () => {
  await Dialog({
    texts: ["確定要關閉這個網站嗎！？"],
    okText: "沒有啦開玩笑的",
    cancelText: "取消"
  });
};
const emit = defineEmits(['full-screen'])
const clickFullScreen = () => {
  emit("full-screen")
}
</script>

<template lang='pug'>
#header
  .left-area
    .close-dot(@click="CloseFlow")
      img.img(:src="close")
    .yellow-dot
      img.img(:src="small")
    .green-dot(@click="clickFullScreen")
      img.img(:src="fullIcon")
</template>

<style lang="scss" scoped>
#header {
  background-color: #3C3C3C;
  width: 100%;
  height: 30px;
  border-radius: 10px 10px 0 0;
  border:  solid #787878;
  border-width: 1px 0px 0px 0px;
  .left-area {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 12px;
    .img {
      width: 100%;
      padding: 3px;
      opacity: 0;
    }
    &:hover {
      .img {
        opacity: 1;
      }
    }
  }
  .dot {
    position: relative;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
  }
  .green-dot {
    @extend .dot;
    background-color: #65C454;
  }
  .yellow-dot {
    @extend .dot;
    background-color: #FFD500;
    .img {
      padding: 6px;
    }
  }
  .close-dot {
    @extend .dot;
    background-color: #EA695E;
  }
}
</style>
