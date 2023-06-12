<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ref } from "vue";
gsap.registerPlugin(ScrollTrigger);

import { onMounted } from "vue";
const gif = ref(new URL(`../assets/pixel.gif`, import.meta.url).href)
onMounted(() => {
  // gsap.to('.dot', {x: 100, duration:1,})
  // gsap.to('.dot', {y: 100, duration:1})
  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".item0", // 決定scrolltrigger要以哪一個元素作為觸發基準點
      markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
      start: 'top 5%', // 決定動畫開始點的位置
      end: 'top 1%', // 決定動畫結束點的位置
      scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
    },
  })
  const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".item1", // 決定scrolltrigger要以哪一個元素作為觸發基準點
      markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
      start: 'top 5%', // 決定動畫開始點的位置
      end: 'top 1%', // 決定動畫結束點的位置
      scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
    },
  })
  // 使用timeline控制動畫

  // const tt = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".timeline-area", // 決定scrolltrigger要以哪一個元素作為觸發基準點
  //     markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
  //     start: 'top 15%', // 決定動畫開始點的位置
  //     end: 'top -20%', // 決定動畫結束點的位置
  //     scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
  //     // pin: true, // 釘選元素
  //   },
  // })
  // const tl = ScrollTrigger.create({
  //   markers: true,
  //   trigger: ".li",
  //   start: 'top 15%', // 決定動畫開始點的位置
  //   end: 'top 1%', // 決定動畫結束點的位置
  //   scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
  //   }); 
  // tl.to('.dot', {
  //   top: '10%', // 距外層容器top 0px
  //   // left: '50%', // 距外層容器left 50%
  //   xPercent: '-50', // translate(-50%, 0)
  //   duration: 5, // 動畫持續時間之比例
  //   position: 'absolute', // position: 'absolute'，絕對位置才能使用left, right...等
  // })
  // t2.to('.dot', {
  //   top: '500px', // 距外層容器top 0px
  //   // left: '50%', // 距外層容器left 50%
  //   xPercent: '-50', // translate(-50%, 0)
  //   duration: 20, // 動畫持續時間之比例
  //   position: 'absolute', // position: 'absolute'，絕對位置才能使用left, right...等
  // })
  t1.from('.dot', { opacity: 0, top: '0%', duration: 1 ,position: 'absolute',});
  t1.to('.dot', { opacity: 1,top: '10%', duration: 1 , position: 'absolute',});
  t2.from('.dot', { opacity: 1,top: '10%', duration: 1 ,position: 'absolute',});
  t2.to('.dot', { opacity: 1,top: '50%', duration: 1 , position: 'absolute',});
  // tt.to('.dot', {
  //   top: '0%', // 距外層容器top 0px
  //   // left: '50%', // 距外層容器left 50%
  //   // xPercent: '-50', // translate(-50%, 0)
  //   // duration: 20, // 動畫持續時間之比例
  //   position: 'absolute', // position: 'absolute'，絕對位置才能使用left, right...等
  // }).to('.dot', {
  //     top: '90%',
  //     // yPercent: '-100', // translate(0, -100%)
  //     // duration: 20,
  //     position: 'absolute',
  //   })
})
function reset() {
}
function animated() {
  gsap.to('.dot', {x: 100, duration:1,})

    //   this.$gsap.gsap.to(".car-area", {
    //   ease: "expo.out",
    //   duration: 10,
    //   repeat: -1,
    // });
    // const animation = this.$gsap.gsap.timeline()
    // this.$gsap.gsap.set(".car", { x: 760 });
    // this.$gsap.gsap.set(".flag", { x: 0 ,y:0, rotate:0});

    // animation.fromTo(".title-text1",{  opacity: 0, visibility: "hidden" },{  opacity: 1, visibility: "visible" ,duration: 1, })
    //   .fromTo(".title-text2",{  opacity: 0, visibility: "hidden" },{  opacity: 1, visibility: "visible" ,duration: 1, })
    //   .to(".car",{  opacity: 1, visibility: "visible" ,duration: 1, },"<")
    //   .to(".line",{  opacity: 1, visibility: "visible" ,duration: 1, },"<")
    //   .to(".car",{opacity: 1, visibility: "visible", x: 50, duration: 2, })
    //   .to(".flag",{ opacity: 1, visibility: "visible", x: 0, y: -20, rotate: -20, duration: 1, })
  }



const  experienceDataArr = [
  {
    title:"前進中",
    date:"2023-future",
    descrArr:[
      {
        subtitle:"持續學習",
        desc: [
          "持續學習Vue3、TypeScript、Nuxt3、React..."
        ]
      },
      {
        subtitle:"參與講座",
        desc: [
          "關注前端趨勢，參加 Mopcon 2022、Agile Summit 2023、GitHub Copilot 開發者訓練營..."
        ]
      }
    ],
    color:"#3C84D3"
  },
  {
    title:"泰爾科技股份有限公司",
    date:"2021-2023",
    descrArr:[
      {
        subtitle:"前端工程師",
        desc: [
          "使用 Vue 2 和 Nuxt 2 開發官網，優化 SEO、提高產品曝光度。",
          "遵循 RWD 原則，確保網站自適應並提供最佳效果。",
          "使用 Vue CLI 開發後台系統，優化訂單、庫存管理、用戶管理等業務邏輯。",
          "使用 JavaScript 實現功能需求。",
          "使用 HTML、Sass 和 CSS 實現 Figma 設計稿。",
          "串接第三方 Line Login API。",
          "開發官網活動頁面，維護網站。",
          "使用 Git 版本控制，使用 Github Actions 打版及部署。",
          "與 PM、UI/UX 設計師、後端團隊密切合作，參與需求討論、功能設計和 API 設計。",
          "擔任專案負責人，協調專案進度、分配工作、協調需求和開發進度。",
          "協助新人熟悉公司開發流程，並協助解決問題。",
          "學習新的前端技術和工具，持續提升技術能力。",
        ]
      }
    ],
    color:"#9325D1"
  },
  {
    title:"精進自己有興趣的領域、了解技術內容",
    date:"2019-2021",
    descrArr:[
      {
        subtitle:"畢業後｜精進自己有興趣的領域、了解技術內容：",
        desc: [
          "前端網頁課程：參加了RWD前端網頁設計課程，學習全方位的網頁開發技能。並在結訓時完成團體專題 – 山野閃靈。",
          "設計工具：熟練運用設計工具如PS和AI，能夠將設計轉化為切版和功能開發。",
          "技術工具：熟悉使用jQuery和Bootstrap等前端工具，並持續優化自己的技能。",
          "團隊角色：在團隊專案中擔任程式撰寫和整合的角色，為團隊的成功做出貢獻。",
          "設計邏輯和UI/UX：學習設計的邏輯概念，深入理解UI/UX的重要性，提升與設計師的合作能力。"
        ]
      },
      {
        subtitle:"利用線上資源實作side projects",
        desc: [
          "在網路上學習了Vue.js、firebase realtime database等技術，並利用所學的技術實作side projects。",
          "在side projects中運用所學的技術，使我對於前端開發有更深入的了解。"
        ]
      }
    ],
    color:"#68D543"
  },

  {
    title:"靜宜大學資訊工程學系",
    date:"2015-2019",
    descrArr:[
      {
        subtitle:"大學生涯｜學習專業技術、競賽佳作、團隊分工",
        desc: [
          `使用Android Studio開發畢業專題"LINEUP"。這個專案旨在幫助店家系統性地控制排隊狀況，以最直接的方式節省消費者的等待時間，同時取代傳統紙張的浪費。`,
          "在專案中負責撰寫客戶端的前端功能，並與團隊成員共同規劃整體介面和資料串接。",
          "擔任與教授和團隊之間溝通的橋樑角色，確保開會有條理，並能事後檢討和改善效率，推進專案進度。"
        ]
      },
      {
        subtitle:"社團經歷｜跳脫舒適圈、領導能力培養、組織合作之重要性：",
        desc: [
          "擔任系上榮譽學長姐，帶領新生融入校園，並提供學業和生活上的輔導。",
          "創立社團、挑戰自我，與不同科系的陌生同學一起籌劃創立社團。這使我學習如何製作企劃並說服學校同意社團成立，同時培養了勇於跨入未知領域的能力。",
          "擔任幹部職位，負責規劃活動。在短短一年內，成功吸引了超過100名社員加入，進一步提升了我的人際關係處理和統籌能力。"
        ]
      },
    ],
    color:"#C42D8C"
  },

  // {title:"Title 3" , date:"2016" , descr:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque",color:"#FBCA3E"},
  // {title:"Title 2" , date:"2015" , descr:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque",color:"#C42D8C"},
  // {title:"Title 1" , date:"2014" , descr:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque",color:"#68D543"},
  // {title:"Title 0" , date:"2013" , descr:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque",color:"#9325D1"},
]
</script>

<template lang='pug'>
//- img(:src="gif")
.timeline-area
  .ul
    .li(
      v-for="(item,index) of experienceDataArr"
      :key="index"
      :class="`item${index}`"
      :style="`--accent-color: ${ item.color }`"
    )
      .date {{ item.date }}
      .content
        .title {{ item.title }}
        .descr-area(v-for="descr of item.descrArr" :key="descr")
          .subtitle {{ descr.subtitle }}
          .desc(v-for="desc of descr.desc" :key="desc")
            img(:src="gif" style="width: 22px; padding-right:5px;")
            span {{ desc }}
  .dot
</template>

<style lang="scss" scoped>
.timeline-area {
  position: relative;
  margin-top: 100px;
}
.dot {
  top: 0;
  left: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transform: translate(-50%, 0%);
  background-color: pink;
}
.ul {
  width: 100%;
  color: black;
  display: grid;
  grid-template-columns: 0.25rem 1fr;
  grid-auto-columns: max-content;
  column-gap: 2rem;
  list-style: none;
  // width: min(60rem, 90%);
  margin-inline: auto;
  &::before {
    content: "";
    grid-column: 1;
    grid-row: 1 / span 20;
    background: rgb(225, 225, 225);
  }
  .li {
    //
    grid-column: 2;
    margin-inline: 1.5rem;
    grid-row: span 2;
    display: grid;
    grid-template-rows: min-content min-content min-content;
    .date {
      height: 3rem;
      margin-inline: calc(1.5rem * -1);
      text-align: center;
      background-color: var(--accent-color);
      color: white;
      font-size: 1.25rem;
      font-weight: 700;
      display: grid;
      place-content: center;
      position: relative;
      border-radius: calc(3rem / 2) 0 0 calc(3rem / 2);
      &::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: var(--accent-color);
        border: 0.3rem solid var(--accent-color);
        border-radius: 50%;
        top: 50%;
        transform: translate(50%, -50%);
        right: calc(100% + 2rem + 0.25rem / 2);
      }
      &::before {
        content: "";
        width: 30px;
        height: 20px;
        background: var(--accent-color);
        background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
        position: absolute;
        top: 100%;
        clip-path: polygon(0 0, 100% 0, 0 100%);
        right: 0;
      }
    }
    .content {
      background-color: rgb(255, 255, 255);
      position: relative;
      padding: 20px 25px;
      border-radius: 0 0px 20px 20px;
      .title {
        overflow: hidden;
        font-weight: 500;
        font-size: 1.2rem;
      }
      .descr-area {
        padding-block-end: 1.5rem;
        font-weight: 300;
        .subtitle {
          font-size: 1rem;
        }
        .desc {
          padding-top: 5px;
          font-size: 0.9rem;
          // &::before {
          //   content:'';
          //   clear:both;
          //   height:20px;
          //   width:20px;
          //   display:block;
          //   --img:v-bind(gif);
          //   background-image: url(var(--img));
          //   // background-color: gr;
          //   // background-image: url(https://susscargologistics.com/wp-content/uploads/2020/04/green.gif);
          //   background-size:100%;
          //   // content: "4545 ";
          //   // width: 10px;
          //   // height: 10px;
          //   // background-image: v-bind(gif);
          //   // position: absolute;
          //   // top:0;
          //   // width:;
          //   // height: 0.5rem;
          //   // background: rgba(0, 0, 0, 0.5);
          //   // left: 50%;
          //   // border-radius: 50%;
          //   // filter: blur(5px);
          //   // transform: translate(-50%, 50%);
          // }
        }
      }
    }
  }
}

/* row gaps */
.li:not(:last-child) {
  margin-bottom: 2rem;
}

/* shadows */
.title::before,
.descr-area::before {
  content: "";
  position: absolute;
  width: 90%;
  height: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  left: 50%;
  border-radius: 50%;
  filter: blur(5px);
  transform: translate(-50%, 50%);
}
.title::before {
  // bottom: calc(100% + 0.125rem);
  // bottom: ;
  top: -5px;
}

.descr-area::before {
  z-index: -1;
  bottom: 0.25rem;
}

@media (min-width: 768px) {
  .ul {
    grid-template-columns: 1fr 0.25rem 1fr;
  }
  .ul::before {
    grid-column: 2;
  }
  .li:nth-child(odd) {
    grid-column: 1;
  }
  .li:nth-child(even) {
    grid-column: 3;
  }
  /* start second card */
  .li:nth-child(2) {
    grid-row: 2/4;
  }

  .li:nth-child(odd) .date {
    border-radius: 0 calc(3rem / 2) calc(3rem / 2) 0;
    &::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%);
      left: 0;
    }
    &::after {
      transform: translate(-50%, -50%);
      left: calc(100% + 2rem + 0.25rem / 2);
    }
  }
  .li:not(:last-child) {
    margin-bottom: 2rem;
  }
}
</style>
