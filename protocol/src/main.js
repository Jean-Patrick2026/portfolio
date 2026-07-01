import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { initLenis } from './plugins/lenis'

const app = createApp(App)
app.use(router)
app.mount('#app')

// Init Lenis smooth scroll after mount
initLenis()
