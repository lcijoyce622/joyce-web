import { defineStore } from 'pinia';

export const deviceStore = defineStore('deviceStore',{
 //定義狀態初始值
 state: () => ({isMobile: false}),
 //對狀態加工的 getters，如同 computed
 getters: {
   deviceIsMobile: (state) => state.isMobile,
 },
 //定義使用到的函式，可以為同步和非同步，如同 method
 actions: {
   ResizeWindow() {
    if (window.innerWidth > 768) {
      this.isMobile = false;
      return;
    }
    if (window.innerWidth <= 768) {
      this.isMobile = true;
      return;
    }
    this.isMobile = !!window.navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
   },
 }
});
