<script setup>
// import MainContent from "@/components/mainContent.vue"
import Prism from "prismjs";
import "@/styles/css/prism.css";
import codeTemplate from "@/components/codeTemplate.vue"
import { htmlData, cssData, jsData } from "@/static/aboutMe.js"
import { onMounted, nextTick, ref, onBeforeUnmount } from 'vue'
onMounted(async () => {
  await nextTick();
  Prism.highlightAll();
})
const typingTextInfo = `I'm a Front-End Web Developer...😁`;
const typingTexts = ref("");
const count = ref(0);
const forward = ref(true);
onBeforeUnmount(() => {
  clearInterval(timer);
});
const timer = setInterval(() => {
  // 前進
  if(forward.value) {
    if(count.value >= typingTextInfo.length){
      setTimeout(() => {
        forward.value = false;
        return;
      }, 3000);
    }
    count.value++;
    typingTexts.value = typingTextInfo.slice(0, count.value);
  }
  // 後退
  if(!forward.value) {
    if(count.value <= 0){
      forward.value = true;
      return;
    }
    if(count.value > 0){
      count.value--;
      typingTexts.value = typingTextInfo.slice(0, count.value);
    }
  }
}, 100);
</script>

<template lang="pug">
//- MainContent
.code-area
  codeTemplate(
    v-for="item of htmlData.part1"
    :key="item"
    :class="item.class"
    :tag="item.tag"
    language="html"
    :need-close-tag="item.closeTag"
    :content="item.content")
  .ani
    span.text_shadows {{ `<title> Hello, I'm Joyce.👋🏻 </title>` }}
  code.language-html.f-14 {{ `</head>` }}
  code.language-html.f-14 {{ `</body>` }}

  .typing-area
    code.language-html.f-25 {{ `<strong>` }}
    strong.typing.f-25 {{ typingTexts }}
    code.language-html.f-25 {{ `</strong>` }}
  codeTemplate(
    v-for="item of htmlData.part2"
    :key="item"
    :class="item.class"
    :tag="item.tag"
    language="html"
    :need-close-tag="item.closeTag"
    :content="item.content")
  code.language-html.title-code {{ `// NOTICE 前端技術` }}
  codeTemplate(
    v-for="item of jsData"
    :key="item"
    :class="item.class"
    :tag="item.tag"
    :need-close-tag="item.closeTag"
    language="javascript"
    :content="item.content")
  code.language-html.f-14 {{ `</script>` }}
  code.language-html.f-14 {{ `<style lang="scss">` }}
  codeTemplate(
    v-for="item of cssData"
    :key="item"
    :class="item.class"
    :tag="item.tag"
    :need-close-tag="item.closeTag"
    language="css"
    :content="item.content")
  code.language-html.f-14 {{ `</style>` }}
  
</template>
<style lang="scss" scoped>

code {
  padding: 0;
  display: block;
}
.code-area {
  background-color: #1E1E1E;
  max-height: 100%;
  // height: calc(100vh - 104px);
  margin: 0 10px;
  overflow-y: overlay;
}
.typing-area {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .typing {
    color: #ed8686;
    padding: 0 10px;
    position: relative;
    letter-spacing: 3px;
    animation: change-color 4s ease-in infinite;
    &::after {
      content: "|";
      animation: typing 0.5s ease-in infinite;
      position: absolute;
    }
  }
}

.pl-20 {
  padding-left: 20px;
  margin-left: 0px;
  border-left: 1px solid #6a6a6a;
  border-radius: 0;
}
.pl-40 {
  padding-left: 20px;
  margin-left: 0px;
  border-left: 1px solid #6a6a6a;
  border-radius: 0;
  &::before{
    content: "";
    padding-left: 20px;
    margin-left: 5px;
    height: 100px;
    border-left: 1px solid #6a6a6a;
  }
}
.pl-60 {
  padding-left: 20px;
  margin-left: 0px;
  border-left: 1px solid #6a6a6a;
  border-radius: 0;
  &::before{
    content: "｜";
    color: #6a6a6a;
    letter-spacing: 10px;
    padding-left: 15px;
    margin-left: 5px;
    height: 100px;
    border-left: 1px solid #6a6a6a;
  }
}
.title-code {
  color: rgb(133, 243, 133);
  font-size: 20px;
}
.f-28 {
  font-size: 1.5rem;
}
.f-25 {
  font-size: 1.25rem;
}
.f-20 {
  font-size: 1.125rem;
}
.f-14 {
  font-size: 1rem;
}

.ani {
  margin-top: 10px;
  display: flex;
  align-content: center;
}

.text_shadows {
  padding: 10px;

  text-shadow: 3px 3px 0 #73ff96, 6px 6px 0 #ffbc85,
    9px 9px #f07a6a, 12px 12px 0 #8e9b0a;
  font-weight: bolder;
  text-transform: uppercase;
  font-size: 1.8rem;
  margin: 0;
  color: #30b6fc;
  animation: shadows 2s ease-in infinite, move 2s ease-in infinite;
  letter-spacing: 0.4rem;
}

@keyframes shadows {
  0% {
    text-shadow: none;
  }
  10% {
    text-shadow: 3px 3px 0 #73ff96;
  }
  20% {
    text-shadow: 3px 3px 0 #73ff96,
      6px 6px 0 #ffbc85;
  }
  30% {
    text-shadow: 3px 3px 0 #73ff96,
      6px 6px 0 #ffbc85, 9px 9px #f07a6a;
  }
  40% {
    text-shadow: 3px 3px 0 #73ff96,
      6px 6px 0 #ffbc85, 9px 9px #f07a6a,
      12px 12px 0 #8e9b0a;
  }
  50% {
    text-shadow: 3px 3px 0 #73ff96,
      6px 6px 0 #ffbc85, 9px 9px #f07a6a,
      12px 12px 0 #8e9b0a;
  }
  60% {
    text-shadow: 3px 3px 0 #73ff96,
      6px 6px 0 #ffbc85, 9px 9px #f07a6a,
      12px 12px 0 #8e9b0a;
  }
  70% {
    text-shadow: 3px 3px 0 #73ff96,
      6px 6px 0 #ffbc85, 9px 9px #f07a6a;
  }
  80% {
    text-shadow: 3px 3px 0 #73ff96,
      6px 6px 0 #ffbc85;
  }
  90% {
    text-shadow: 3px 3px 0 #73ff96;
  }
  100% {
    text-shadow: none;
  }
}

@keyframes move {
  0% {
    transform: translate(0px, 0px);
  }
  40% {
    transform: translate(-12px, -12px);
  }
  50% {
    transform: translate(-12px, -12px);
  }
  60% {
    transform: translate(-12px, -12px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
@keyframes typing {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes change-color{
  0%{
    color:#A0D468;
  }
  
  20%{
    color:#4FC1E9;
  }
  
  40%{
    color:#FFCE54;
  }
  
  60%{
    color:#FC6E51;
  }
  
  80%{
    color:#ED5565;
  }
  
  100%{
    color:#AC92EC;
  }
}

</style>