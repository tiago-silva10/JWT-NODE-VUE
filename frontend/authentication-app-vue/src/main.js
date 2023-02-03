import Vue, { createApp } from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(Vuelidate);

createApp(App).use(router).mount('#app');
