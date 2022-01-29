import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/product',
    component: () => import('../views/Product.vue'),
  },
  {
    path: '/:notFound(.*)',
    redirect: '/login',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
