<script setup>
import Header from "@/components/header.vue"
import NavBar from "@/components/navbar.vue"
import Footer from "@/components/footer.vue"
import { ref } from "vue"
// 開啟全螢幕 ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const fullscreenElement = ref(false);
function clickFullScreen () {
  const elem = document.getElementById("main-content");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  }
  fullscreenElement.value = true;
};
function exitFullscreen () {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    fullscreenElement.value = false;
  } else {
    document.documentElement.requestFullscreen();
  }
};
import { RouterView } from 'vue-router'

</script>

// TODO nav bar(tabs)
// TODO side bar(file tree)
// TODO main(coding area)
// TODO footer(terminal)
<template lang="pug">
Header.header(@full-screen="clickFullScreen")
#Default
  NavBar.navbar
  h1(v-if="fullscreenElement" @click="exitFullscreen") 離開全螢幕
  RouterView#main-content
    //- RouterLink(to="/") Home
Footer.footer

//- .main
//-   RouterLink(to="/") Home
//-   RouterLink(to="/about") About
//-   RouterLink(to="/test") TEST
//-   RouterView
//-   //- HelloWorld
//-   p {{ 4444545 }}
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 99;
}
#Default {
  background-color: #1E1E1E;
  padding-top: 30px;
  padding-left: 350px;
  position: relative;
  color: white;
  max-width: 100vw;
  @media (max-width: 768px) {
    padding-left: 0px;
  }
  .navbar {
    z-index: 98;
    position: fixed;
    left: 0;
  }
  #main-content {
    padding-bottom: 30px;
  }
}

@media (min-width: 1024px) {
}
.footer {
  z-index: 99;
  height: 25px;
  width: 100%;
  background-color: #3779C6;
  position: fixed;
  bottom: 0;
}


</style>
