// vue
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// css
import './assets/tailwind.css';
// ui
import BaseLoading from './components/ui/BaseLoading.vue';
import BaseDialog from './components/ui/BaseDialog.vue';

const app = createApp(App);
app.component('base-loading', BaseLoading);
app.component('base-dialog', BaseDialog);
app.use(store);
app.use(router);
app.mount('#app');
