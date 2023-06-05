<script setup>
import { reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
const pages = [
  {id:1, name:"個人檔案", icon:"icon-files", route:"/"},
  {id:2, name:"聯絡方式", icon:"icon-search",route:"/contact"},
  {id:3, name:"經歷", icon:"icon-source-control",route:"/experience"},
  {id:4, name:"技能", icon:"icon-tag",route:"/skill"},
  {id:5, name:"作品集", icon:"icon-extensions",route:"/portfolio"},
]
const fileTypeObj= {
  md: new URL(`../assets/md.svg`, import.meta.url).href,
  folder: new URL(`../assets/folder-close.svg`, import.meta.url).href,
  folderOpen: new URL(`../assets/folder.svg`, import.meta.url).href,
  html: new URL(`../assets/html5.svg`, import.meta.url).href,
  js: new URL(`../assets/js.svg`, import.meta.url).href,
  vue: new URL(`../assets/vue.svg`, import.meta.url).href,
  css: new URL(`../assets/css3.svg`, import.meta.url).href,
}
const files= reactive([
  {id:1,name:"AboutMe.css",fileTypeUrl:fileTypeObj.css,route:"/",isOpen:false,children: [] },
  {id:2,name:"ContactMe.html",fileTypeUrl:fileTypeObj.html,route:"/contact",isOpen:false,children: []},
  {id:3,name:"MyExperience",fileTypeUrl:fileTypeObj.folder,route:"/experience",isOpen:false,children: [
    {id:31,name:"SchoolStage.js",fileTypeUrl:fileTypeObj.js,route:"/experience"},
    {id:32,name:"JuniorFrontendWebDeveloper.js",fileTypeUrl:fileTypeObj.js,route:"/experience"},
    {id:33,name:"SeniorFrontendWebDeveloper.js",fileTypeUrl:fileTypeObj.js,route:"/experience"},
    ]
  },
  {id:4,name:"MySkills",fileTypeUrl:fileTypeObj.folder,route:"/skill",isOpen:false,children: [
    {id:41,name:"Programming.vue",fileTypeUrl:fileTypeObj.vue},
    {id:42,name:"WebDevelopment.vue",fileTypeUrl:fileTypeObj.vue},
    {id:43,name:"OtherSkill.vue",fileTypeUrl:fileTypeObj.vue},
    ]
  },
  {id:5,name:"MyPortfolio.md",fileTypeUrl:fileTypeObj.md,route:"/portfolio",isOpen:false,children: []},
]);
const router = useRouter();
const route = useRoute();
const OpenFolder = (file) => {
  if(file.children.length !== 0) {
    file.isOpen = !file.isOpen;
  };
  router.push(file.route);
}
</script>

<template lang='pug'>
.navbar
  .icon-bar
    .top-area
      .icon(v-for="page in pages" :key="page.id" :class="page.icon" @click="router.push(page.route)")
    .bottom-area
      .icon.icon-github-inverted
      .icon.icon-settings-gear
  .file-bar
    //- 第一層
    .file(v-for="file in files" :key="file.id")
      .col(@click="OpenFolder(file)")
        .icon
          .icon.icon-angle-right(v-show="file.children.length>0" :class="{'is-open':file.isOpen, 'is-choose':route.path === file.route}")
        .col
          img.file-img(v-if="!file.isOpen" :src="file.fileTypeUrl")
          img.file-img(v-else :src="fileTypeObj.folderOpen")
          span(:class="{'is-choose':route.path === file.route}") {{ file.name }}
      //- 第二層
      .child-area(v-if="file.isOpen")
        .fileChild(v-for="child in file.children" :key="child.id" @click="router.push(file.route)")
          .col
            img.file-img(:src="child.fileTypeUrl")
            span {{ child.name }}
</template>

<style lang="scss" scoped>
.navbar {
  height: 100%;
  display: grid;
  grid-template-columns: 45px 1fr;
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
  @media (max-width: 768px) {
    flex-direction: row;
  }
  .top-area {
    display: flex;
    flex-direction: column;
    gap: 5px;
    @media (max-width: 768px) {
      flex-direction: row;
    }
  }
  .bottom-area {
    @media (max-width: 768px) {
      display: flex;
      gap: 5px;
      flex-direction: row;
    }
  }
  .icon {
    font-size: 25px;
    color: #6a6a6a;
  }
}
.file-bar {
  cursor: pointer;
  user-select: none;
  color: #a5a5a5d7;
  font-size: 14px;
  height: calc(100vh - 58px);
  background-color: #252526;
  overflow-y: scroll;
  padding: 10px 5px;
  @media (max-width: 768px) {
    display: none;
  }
  .col {
    display: grid;
    grid-template-columns: 20px 1fr;
    align-items: center;
    padding: 2px 0;
    .file-img {
      width: 12px;
    }
  }
  .fileChild {
    border-left: 1px solid #6a6a6a;
    padding-left: 20px;
    margin-left: 10px;
  }
}
.is-choose {
  color: #fff;
}
.is-open {
  transform: rotate(90deg);
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
