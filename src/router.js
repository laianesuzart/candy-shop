import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import CartView from '@/views/CartView.vue';
import ProductView from '@/views/ProductView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/cart', component: CartView },
  { path: '/:productId', component: ProductView },
  { path: '/:pathMatch(.*)*', component: NotFoundView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
