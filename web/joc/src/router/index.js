import { createRouter, createWebHistory } from 'vue-router'
import PuntuacionsVue from '../views/PuntuacionsView.vue'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/adminView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/puntuacions",
      name: "puntuacions",
      component: PuntuacionsVue
    
    },
    {
      path: "/admin/:user",
      name: "admin",
      component: AdminView
    
    },
  ]
})

export default router
