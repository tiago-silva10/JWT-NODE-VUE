import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/auth-components/login/loginComponent.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/auth-components/home/homeComponent.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/auth-components/register/registerComponent.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

/* routes.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

routes.afterEach((to, from) => {
  NProgress.done();
}); */

export default router;
