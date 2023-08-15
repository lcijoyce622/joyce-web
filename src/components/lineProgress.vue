<script setup>
const props = defineProps({
  progress: {
    type: Number,
    default: 0,
  },
});
</script>

<template lang='pug'>
.line-background
  .line-progress(:style="`--line-progress-width: ${ props.progress >= 100 ? `100%` : `${props.progress}%` }`")

</template>

<style lang="scss" scoped>
.line-background {
  width: 100%;
  height: 10px;
  position: relative;
  background-color: aliceblue;
  border-radius: 10px;
  .line-progress {
    top: 0;
    left: 0;
    position: absolute;
    border-radius: 10px;
    background-color: aqua;
    width: var(--line-progress-width);
    height: 100%;
    animation: progress 3s forwards;
  }
}
@keyframes progress {
  0% {
    width: 0%;
    // background: #cc411a;
  }
  50% {
    // width: %;
    // background: #e856ff;
  }

  100% {
    width: var(--line-progress-width);
    background: #fef65c;
    box-shadow: 0 0 4px #fef65c;
  }
}
</style>
