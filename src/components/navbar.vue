<script setup>
import { reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
// 左邊選單 icon
const pages = [
  {id:1, name:"個人檔案", icon:"icon-files", route:"/"},
  {id:2, name:"聯絡方式", icon:"icon-search",route:"/contact"},
  {id:3, name:"經歷", icon:"icon-source-control",route:"/experience"},
  {id:4, name:"技能", icon:"icon-tag",route:"/skill"},
  {id:5, name:"作品集", icon:"icon-extensions",route:"/portfolio"},
]
// 檔案類型
const fileTypeObj= {
  md: new URL(`../assets/md.svg`, import.meta.url).href,
  folder: new URL(`../assets/folder-close.svg`, import.meta.url).href,
  folderOpen: new URL(`../assets/folder.svg`, import.meta.url).href,
  html: new URL(`../assets/html5.svg`, import.meta.url).href,
  js: new URL(`../assets/js.svg`, import.meta.url).href,
  vue: new URL(`../assets/vue.svg`, import.meta.url).href,
  css: new URL(`../assets/css3.svg`, import.meta.url).href,
}
// files 資料夾 data
const files= reactive([
  {id:1, name:"AboutMe", type: "css", route:"/", isOpen:false, children: [] }, 
  {id:2, name:"ContactMe", type: "html", route:"/contact", isOpen:false, children: []}, 
  {id:3, name:"MyExperience", type: "folder", route:"/experience", isOpen:false, children: [
    {id:31, name:"SchoolStage", type: "js", route:"/experience?link=SchoolStage"}, 
    {id:32, name:"JuniorFrontendWebDeveloper", type: "js", route:"/experience?link=JuniorFrontendWebDeveloper"}, 
    {id:33, name:"SeniorFrontendWebDeveloper", type: "js", route:"/experience?link=SeniorFrontendWebDeveloper"}, 
    ]
  }, 
  {id:4, name:"MySkills",type: "folder", route:"/skill", isOpen:false, children: [
    {id:41, name:"Programming", type: "vue", route:"/skill?link=Programming"}, 
    {id:42, name:"WebDevelopment",type: "vue", route:"/skill?link=WebDevelopment"}, 
    {id:43, name:"OtherSkill", type: "vue", route:"/skill?link=OtherSkill"}, 
    ]
  }, 
  {id:5, name:"MyPortfolio",type: "md", route:"/portfolio", isOpen:false, children: []},
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
          img.file-img(v-if="!file.isOpen" :src="fileTypeObj[file.type]")
          img.file-img(v-else :src="fileTypeObj.folderOpen")
          span(:class="{'is-choose':route.path === file.route}") {{ file.type!=='folder'?`${file.name}.${file.type}`:file.name }}
      //- 第二層
      .child-area(v-if="file.isOpen")
        .fileChild(v-for="child in file.children" :key="child.id" @click="router.push(child.route)")
          .col
            img.file-img(:src="fileTypeObj[child.type]")
            span(:class="{'hightlight':route.query.link==child.name}") {{ `${child.name}.${child.type}` }}
</template>

<style lang="scss" scoped>
.navbar {
  width: 350px;
  display: grid;
  grid-template-columns: 45px 1fr;
  @media (max-width: 768px) {
    height: unset;
    width: 100%;
    grid-template-columns: 1fr 0;
  }
}

.icon-bar {
  background-color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
  height: calc(100vh - 55px);
  background-color: #252526;
  padding: 0px 5px;
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
  .hightlight {
    color: white;
  }
}
.is-choose {
  color: #fff;
}
.is-open {
  transform: rotate(90deg);
}
span {
  transition: all 0.3s ease-in-out;
}

</style>
