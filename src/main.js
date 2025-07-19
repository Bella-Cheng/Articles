import './main.css'
import '../src/assets/carousel.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router/router.js'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(vue3GoogleLogin, {
  clientId: 'YOUR_GOOGLE_CLIENT_ID'
})

app.mount('#app')