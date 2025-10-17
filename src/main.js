import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript (with Popper.js)
import router from './router';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')
