# 修改fontello-embedded.scss與icon.json流程
# 1.config.json 改為 icon.json內容直接完全替換
# 2.fontello-embedded.css貼上後改成.scss檔案
# 3.註解fontello-embedded.scss 註解1到8行訊息
<!-- // @font-face {
//   font-family: 'fontello';
//   src: url('../font/fontello.eot?50951210');
//   src: url('../font/fontello.eot?50951210#iefix') format('embedded-opentype'),
//        url('../font/fontello.svg?50951210#fontello') format('svg');
//   font-weight: normal;
//   font-style: normal;
// } -->
# 4.fontello-embedded.scss 25行到59行之間的修改
<!-- 
display: inline-block; 改成 display: inline-flex;
width: 1em; 此行註解
margin-right: .2em; 此行註解
margin-left: .2em; 此行註解
line-height: 1em; 此行註解 
-->