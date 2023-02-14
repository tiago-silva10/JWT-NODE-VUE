import Vue, { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Vue.use(router); */

/* Vue.config.productionTip = false; */

createApp(App).use(router).mount('#app');
