import { routes } from "./routes";
import { createWebHashHistory, createRouter } from 'vue-router';


export const router = createRouter({
    history: createWebHashHistory(import.meta.env.VITE_BASE_URL + '/'),
    routes,
});

