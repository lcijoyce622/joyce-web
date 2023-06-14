import { createRouter, createWebHashHistory } from 'vue-router'
import {setupLayouts} from 'layouts-generated'
import generatedRoutes from 'pages-generated'

const routes = setupLayouts(generatedRoutes);
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
