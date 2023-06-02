<script setup>
import Header from "@/components/header.vue"
import NavBar from "@/components/navbar.vue"
import Footer from "@/components/footer.vue"
import MainContent from "@/components/mainContent.vue"
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
  .content
    NavBar
    MainContent
    
  Footer

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
  position: relative;
  color: white;
  // height: calc(100vh - 150px);
  // overflow-y: hidden;
  display: grid;
  grid-template-rows: 1fr 25px;

  .content {
    width: 100%;
    display: grid;
    grid-template-columns: 350px 1fr;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 50px 1fr;

    }
  }
}

@media (min-width: 1024px) {
}

</style>
