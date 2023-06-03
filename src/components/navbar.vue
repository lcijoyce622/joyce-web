<script setup>
import { useRouter } from "vue-router";
// import files from "@/assets/files.svg"
const fileObj = {
  id: 1,
  title: "myfile",
  filecontent: [
    { fileTitle: "我的作品集" }
  ]
}
const contentObj = {
  id: 2,
  title: "searchme",
  filecontent: [
    { fileTitle: "聯絡方式" }
  ]
}
const router = useRouter();

</script>

<template lang='pug'>
.navbar
  .icon-bar
    .top-area
      .icon.icon-files(@click="router.push('/test')")
      .icon.icon-search
      .icon.icon-source-control
      .icon.icon-extensions
    .bottom-area
      .icon.icon-github-inverted
      .icon.icon-settings-gear
  .file-bar
    
</template>

<style lang="scss" scoped>
.navbar {
  height: 100%;
  display: grid;
  grid-template-columns: 65px 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 0;
  }

}

.icon-bar {
  background-color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  .top-area {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .icon {
    font-size: 35px;
    color: #6a6a6a;
  }
}
.file-bar{
  height: calc(100vh - 58px);
  background-color: #252526;
  overflow-y: scroll;
  @media (max-width: 768px) {
    display: none;
  }
}


.file-bar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #111111c1;
}

.file-bar::-webkit-scrollbar {
  width: 8px;
  background-color: #a5a5a5d7;
}

.file-bar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #6a6a6a;
}

</style>
