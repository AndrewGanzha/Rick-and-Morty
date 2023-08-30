import './styles/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/UIHeader.vue'
import Footer from './components/UIFooter.vue'

const app = createApp(App)
app.component('HeaderUI', Header)
app.component('FooterUI', Footer)
app.use(router).mount('#app')
