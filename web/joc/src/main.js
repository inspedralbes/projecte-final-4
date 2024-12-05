import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createPinia } from 'pinia'
import VueCryptojs from 'vue-cryptojs'


import App from './App.vue'
import router from './router'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios) // 👈
app.mount('#app')
app.use(VueCryptojs)

import { AdminStore } from './stores/store'
const admin = AdminStore()

router.beforeEach((to,from,next)=>{
	if(to.meta.requireAuth){
		if(admin.user){
			next()
		}else{
			next({path:'/'})
		}
	}else{
		next()
	}
})