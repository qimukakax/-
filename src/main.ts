import { createApp } from 'vue'
import store from './vuex'
import router from './router'
import App from './App.vue'
import installElementPlus from './plugins/element'

import './styles/index.scss'
const app = createApp(App)

app.use(router).use(store).use(installElementPlus).mount('#app')
