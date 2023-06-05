import { ref } from 'vue'
import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
export const fileBarStore = defineStore('fileBarStore', () => {
  const fileBarStatus = ref(true);
  function changeFileBarStatus() {
    fileBarStatus.value=!fileBarStatus.value;
  }
  return { fileBarStatus, changeFileBarStatus}
});
