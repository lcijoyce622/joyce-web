<script setup>
const  experienceDataArr = [
  {title:"Title 4" , date:"2017" , descr:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque",color:"#3C84D3"},
  {title:"Title 3" , date:"2016" , descr:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque",color:"#FBCA3E"},
  {title:"Title 2" , date:"2015" , descr:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque",color:"#C42D8C"},
  {title:"Title 1" , date:"2014" , descr:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque",color:"#68D543"},
  {title:"Title 0" , date:"2013" , descr:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque",color:"#9325D1"},
]
</script>

<template lang='pug'>
ul
  li(v-for="(item,index) of experienceDataArr" :key="index" :style="`--accent-color: ${ item.color }`")
    .date {{ item.date }}
    .content
      .title {{ item.title }}
      .descr {{ item.descr }}
</template>

<style lang="scss" scoped>
ul {
  color: black;
  display: grid;
  grid-template-columns: 0.25rem 1fr;
  grid-auto-columns: max-content;
  column-gap: 2rem;
  list-style: none;
  width: min(60rem, 90%);
  margin-inline: auto;
  &::before {
    content: "";
    grid-column: 1;
    grid-row: 1 / span 20;
    background: rgb(225, 225, 225);
  }
  li {
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
      padding: 0px 20px;
      border-radius: 0 0px 20px 20px;
      .title {
        overflow: hidden;
        font-weight: 500;
      }
      .descr {
        padding-block-end: 1.5rem;
        font-weight: 300;
      }
    }
  }
}

/* row gaps */
li:not(:last-child) {
  margin-bottom: 2rem;
}

/* shadows */
.title::before,
.descr::before {
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

.descr::before {
  z-index: -1;
  bottom: 0.25rem;
}

@media (min-width: 768px) {
  ul {
    grid-template-columns: 1fr 0.25rem 1fr;
  }
  ul::before {
    grid-column: 2;
  }
  li:nth-child(odd) {
    grid-column: 1;
  }
  li:nth-child(even) {
    grid-column: 3;
  }
  /* start second card */
  li:nth-child(2) {
    grid-row: 2/4;
  }

  li:nth-child(odd) .date {
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
}
</style>
