<script setup>
import Header from "@/components/header.vue"
import NavBar from "@/components/navbar.vue"
// 開啟全螢幕 ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
function clickFullScreen () {
  const elem = document.getElementById("Default");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  }
};
</script>

// TODO nav bar(tabs)
// TODO side bar(file tree)
// TODO main(coding area)
// TODO footer(terminal)
<template lang="pug">
Header(@full-screen="clickFullScreen")
#Default
  NavBar
  p 111212


//- .main
//-   RouterLink(to="/") Home
//-   RouterLink(to="/about") About
//-   RouterLink(to="/test") TEST
//-   RouterView
//-   //- HelloWorld
//-   p {{ 4444545 }}
</template>

<style lang="scss" scoped>
#Default {
  color: white;
}

@media (min-width: 1024px) {
}
</style>
