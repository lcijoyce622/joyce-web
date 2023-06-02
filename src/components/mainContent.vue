<script setup>
import iconFile from "@/styles/icon/icon.json";

const otherIconList = iconFile.glyphs.map((itemObj) => `icon-${itemObj.css}`);
</script>

<template lang='pug'>
.icon-areas
  div(v-for="icon in otherIconList" :key="icon")
    p {{ icon }}
    div(:class="icon")
</template>

<style lang="scss" scoped>
.icon-areas {
  height: calc(100vh - 58px);
  overflow-y: overlay;
}


.icon-areas::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #111111c1;
}

.icon-areas::-webkit-scrollbar {
  width: 8px;
  background-color: #a5a5a5d7;
}

.icon-areas::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #6a6a6a;
}

</style>
