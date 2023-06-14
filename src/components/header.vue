<script setup>
import fullIcon from "@/assets/bigger.svg"
import small from "@/assets/smaller.svg"
import close from "@/assets/close.svg"
import { Dialog } from "@/plugins/dialog/index.js";


function CloseFlow () {
  DialogTest();
}
const DialogTest = async () => {
  await Dialog({
    texts: ["確定要關閉這個網站嗎！？"],
    okText: "沒有啦開玩笑的",
    cancelText: "取消",
    showBug: true,
  });
};
const emit = defineEmits(['full-screen', 'close-file-bar'])
const clickFullScreen = () => {
  emit("full-screen")
}
const EmitCloseFileBar = () => {
  emit("close-file-bar");
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
  .right-area
    .icon-layout-panel-off
    .icon-layout-sidebar-left-off(@click="EmitCloseFileBar")


</template>

<style lang="scss" scoped>
#header {
  display: flex;
  justify-content: space-between;
  background-color: #3C3C3C;
  width: 100%;
  height: 30px;
  border-radius: 10px 10px 0 0;
  border: solid #787878;
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
  .right-area {
    padding-right: 10px;
    color: white;
    display: flex;
    gap: 5px;
    align-items: center;
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
