import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import {router} from './router'; // Make sure to export router as default

import './style.css';
import VScrollLock from 'v-scroll-lock';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import '../node_modules/flowbite-vue/dist/index.css';


const app = createApp(App);

// Initialize Pinia
const pinia = createPinia();
app.use(pinia);

// Use other plugins
app.use(router);
app.use(VScrollLock);
app.use(PerfectScrollbar);

app.mount('#app');