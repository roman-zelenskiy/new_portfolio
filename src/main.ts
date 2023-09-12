import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import CustomScrollbar from 'custom-vue-scrollbar';
import 'custom-vue-scrollbar/dist/style.css';

const app = createApp(App);
app.use(router);
app.component(CustomScrollbar.name, CustomScrollbar);

app.mount('#app');
