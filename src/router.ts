import { createWebHashHistory, createRouter } from 'vue-router';
import { routes } from './routes';

export const router = createRouter({
  history: createWebHashHistory(`${import.meta.env.VITE_BASE_URL}/`),
  routes
});
