import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    component: () => import('../views/HomeView.vue'),
    name: 'home',
    path: '/',
  },
  {
    component: () => import('../views/AboutView.vue'),
    name: 'about',
    path: '/about'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
