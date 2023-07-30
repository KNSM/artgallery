import { createApp } from 'vue'
import App from './App'
import store from "@/vuex/unsplashImages";
import router from "@/router/router"
import './assets/scss/styles.scss'


const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
