<script setup>
import circleProgress from "@/components/circleProgress.vue";

</script>

<template lang='pug'>
.skill-area
  .skill-circle
    circleProgress(:percent="50")
</template>

<style lang="scss" scoped>
.skill-area {
  // display: flex;
  margin: 100px;
  .skill-circle {
    position: relative;
    width: 100px;
    height: 100px;
  }
}
</style>
