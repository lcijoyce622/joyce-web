<script setup>
  import debounce from "lodash/debounce";
  import { defineEmits } from "vue";
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
#Default
  .dialog-mask(@click="ClickMask")
  .content-area
    .content
      .texts
        p(v-for="(text, idx) in props.config.texts" :key="idx") {{text}}
      .btns
        .btn.cancel(@click="ClickCancel")
          p {{props.config.cancelText}}
        .btn.ok( @click="ClickOk")
          p {{props.config.okText}}
</template>

<style lang="scss" scoped>
#Default {
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
  letter-spacing: 1px;
  .dialog-mask {
    position: absolute;
    z-index: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(1px);
  }
  .content-area {
    grid-column: 2;
    grid-row: 2;
    z-index: 1;
  }
}
// 元件
#Default {
  .content {
    background: #fff;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    display: grid;
    grid-template-rows: auto auto;
    grid-gap: 10px;
    grid-template-areas:
      "texts"
      "btns";
    .texts {
      text-align: center;
      grid-area: "texts";
    }
    .btns {
      grid-area: "btns";
      display: flex;
      gap: 10px;
      .btn {
        cursor: pointer;
        user-select: none;
        min-width: 100px;
        font-size: 14px;
        line-height: 18px;
        padding: 5px 10px;
        // border: 1px solid rgb(194, 194, 194);
        border-radius: 4px;
        text-align: center;
        p {
          letter-spacing: 5px;
          padding-left: 5px;
        }
      }
    }
  }
  .cancel {
    background: rgb(220, 220, 220);
  }
  .ok {
    color: #fff;
    background: #334159;
    &:hover {
      background: #7396b1;
    }
    &:active {
      background: #7396b1;
    }
  }
}
</style>
