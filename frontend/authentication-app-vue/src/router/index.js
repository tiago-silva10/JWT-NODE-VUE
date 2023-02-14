import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/loginComponent.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/homeComponent.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/registerComponent.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
