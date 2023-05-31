import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import * as dialog from "@/plugins/dialog";

import App from './App.vue'
import router from './router'

const app = createApp(App)
// app.provide('$dialog', dialog);
app.use(createPinia())
app.use(router)

app.mount('#app')
