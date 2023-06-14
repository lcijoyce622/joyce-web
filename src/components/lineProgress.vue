<script setup>
</script>

<template lang='pug'>
.line-background
  .line-progress

</template>

<style lang="scss" scoped>
.line-background {
  width: 100%;
  height: 10px;
  position: relative;
  background-color: aliceblue;
  .line-progress {
    top: 0;
    left: 0;
    position: absolute;
    background-color: aqua;
  }
}
</style>
