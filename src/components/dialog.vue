<script setup>
  import debounce from "lodash/debounce";
  import bug from "@/assets/bug.png";
  const props = defineProps({  
    config: {
      type: Object,
      default: () => ({})
    }
  })
  const emit = defineEmits(['close', 'ok', 'cancel'])
  const ClickMask = debounce(() => {
    emit("close");
  }, 200);
  const ClickOk = debounce(() => {
    emit("ok");
  }, 200);
  const ClickCancel = debounce(() => {
    emit("cancel");
  }, 200);
</script>

<template lang='pug'>
#Dialog
  .dialog-mask(@click="ClickMask")
  .content-area
    .content.backdrop-blur
      .texts
        p(v-for="(text, idx) in props.config.texts" :key="idx") {{text}}
      .btns
        .btn.cancel(v-if="props.config.showCancel" @click="ClickCancel")
          p {{props.config.cancelText}}
        .btn.ok(v-if="props.config.showOk" @click="ClickOk")
          p {{props.config.okText}}
    img.bug(v-if="props.config.showBug" :src="bug")
</template>

<style lang="scss" scoped>
#Dialog {
  color: white;
  z-index: 999;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -20vh;
  overflow: hidden;
  letter-spacing: 3px;
  .dialog-mask {
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(1px);
  }
  .content-area {
    position: relative;
    grid-column: 2;
    grid-row: 2;
    z-index: 1;
  }
  .bug {
    position: absolute;
    top: 0;
    width: 50px;
    margin: 0 auto;
    display: block;
  }
  .backdrop-blur {
    backdrop-filter: blur(5px);
  }
}
// 元件
#Dialog {
  .content {
    border: 5px solid #64ffcb49;
    background: linear-gradient(30deg,#f9949486, #9ca4f998);
    border-radius: 5px;
    padding: 25px 60px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    display: grid;
    grid-template-rows: auto auto;
    grid-gap: 20px;
    grid-template-areas:
      "texts"
      "btns";
    .texts {
      font-size: 1rem;
      text-align: center;
      grid-area: "texts";
    }
    .btns {
      grid-area: "btns";
      display: flex;
      justify-content: center;
      gap: 10px;
      .btn {
        cursor: pointer;
        user-select: none;
        min-width: 100px;
        font-size: 0.8rem;
        line-height: 18px;
        padding: 15px 20px;
        // border: 1px solid rgb(194, 194, 194);
        border-radius: 6px;
        text-align: center;
        p {
          letter-spacing: 3px;
          padding-left: 5px;
        }
      }
    }
  }
  .cancel {
    transition: all 0.2s ease-in-out;
    background: rgb(187, 187, 187);
    &:hover {
      background: #ffffff;
      color: #000000;
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
  .ok {
    transition: all 0.2s ease-in-out;
    color: #fff;
    background: #2b3f63;
    &:hover {
      background: #b1dcfd;
      color: #000000;
      transform: scale(1.1);

    }
    &:active {
      transform: scale(0.9);
      background: #7396b1;
    }
  }
}
</style>
