<script setup>
// import { defineComputed } from 'vue'
import { computed } from 'vue'
const props = defineProps({  
  percent: {
    type: Number,
    default: 0
  }
})
const leftDeg = computed(() => {
  if(props.percent >= 100) return 180;
  return props.percent > 50 ? 180 : 180 * (props.percent / 50)
});
const rightDeg = computed(() => {
  if(props.percent >= 100) return 180;
  return props.percent > 50 ? 180 * ((props.percent - 50) / 50) : 0
});

</script>

<template lang='pug'>
#circleProgress
  .circular
    .inner
    .number {{`${props.percent}%`}}
    .circle
      .bar.right
        .progress(:style="`transform: rotate(${leftDeg}deg);`")
      .bar.left
        .progress(:style="`transform: rotate(${rightDeg}deg);`")
</template>

<style lang="scss" scoped>
#circleProgress {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .circular {
    width: 100%;
    padding-bottom: 100%;
    position: relative;
    .inner{
      position: absolute;
      z-index: 6;
      top: 50%;
      left: 50%;
      height: 80px;
      width: 80px;
      margin: -40px 0 0 -40px;
      border-radius: 100%;
      background-clip: padding-box;
    }
    .number{
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%, -50%);
      z-index:10;
      font-size:18px;
      font-weight:500;
      color: white;
    }
    .bar {
      // box-sizing: border-box;
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: 100%;
      clip-path: polygon(50% 0%,100% 0%,100% 100%,50% 100%);
      .progress {
        transition: all ease .2s;
        position: absolute;
        height: calc(100% - 20px) ;
        width: calc(100% - 20px);
        border-radius: 100%;
        clip-path: polygon(50% 0%,50% 100%,0% 100%,0% 0%);
        border: 10px solid white;
      }
    }
    .right {
      .progress{
        // z-index:1;
      }
    }
    .left {
      transform: rotate(180deg);
      // z-index:3;
      .progress{
      }
    }
  }
}
</style>
