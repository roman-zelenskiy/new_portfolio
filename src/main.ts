import { createApp } from 'vue';
import { router } from './router';
import './style.css';
import App from './App.vue';

import VScrollLock from 'v-scroll-lock'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

const app = createApp(App);
app.use(router);
app.use(VScrollLock);
app.use(PerfectScrollbar);

app.mount('#app');
