<script setup>
import Prism from "prismjs";
import "prismjs/themes/prism-funky.css";
const props = defineProps({
  // html tag
  tag: {
    type: String,
    default: "",
  },
  // language
  language: {
    type: String,
    default: "javascript",
  },
  // 是否需要關閉標籤
  needCloseTag: {
    type: Boolean,
    default: false,
  },
  // 文字大小
  fontSize: {
    type: String,
    default: "14px",
  },
  // 階層
  level: {
    type: Number,
    default: 0,
  },
  // 內容
  content: {
    type: String,
    default: "",
  },
});
</script>

<template lang='pug'>
code(:class="`language-${props.language}`") {{ props.tag?`<${props.tag}>`:"" }} {{ props.content }} {{ needCloseTag?`</${props.tag}>`:""  }}

</template>

<style lang="scss" scoped>
</style>
