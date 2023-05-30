import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/IndexView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    children: [
      {
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
      }
    ]
  },
  /*
  {
    path: '/admin/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue')
  },
  */
  {
    path: '/admin/orders',
    name: 'orders',
    component: () => import('../views/OrdersView.vue')
  },
  {
    path: '/admin/finished_orders',
    name: 'finished_orders',
    component: () => import('../views/FinishedOrdersView.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
