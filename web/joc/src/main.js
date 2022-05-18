import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios) // 👈
app.mount('#app')
