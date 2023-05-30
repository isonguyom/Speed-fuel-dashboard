import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue'),
      children: [
        {
          path: '/fleet-performance',
          name: 'fleet-performance',
          component: () => import('../views/FleetPerformance.vue'),
        },
        {
          path: '/hull',
          name: 'hull',
          component: () => import('../views/Hull.vue'),
        },
        {
          path: '/main-engine',
          name: 'main-engine',
          component: () => import('../views/MainEngine.vue'),
        },
        {
          path: '/auxillaries',
          name: 'auxillaries',
          component: () => import('../views/Auxillaries.vue'),
        },
      ]
    }
  ]
})

export default router
