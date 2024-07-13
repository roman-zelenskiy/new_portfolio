import { routes } from "./routes";
import { createWebHashHistory, createRouter } from 'vue-router';


export const router = createRouter({
    history: createWebHashHistory('/new_portfolio/'),
    routes,
});

