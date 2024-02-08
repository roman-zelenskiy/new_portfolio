import { createApp } from 'vue';
import { router } from './router';
import CustomScrollbar from 'custom-vue-scrollbar';
import './style.css';
import 'custom-vue-scrollbar/dist/style.css';
import App from './App.vue';

const app = createApp(App);
app.use(router);
app.component(CustomScrollbar.name, CustomScrollbar);

app.mount('#app');
