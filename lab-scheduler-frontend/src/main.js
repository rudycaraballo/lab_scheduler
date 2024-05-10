import "./assets/main.css"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/test.scss"


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

let app = createApp(App).use(router)
app.config.globalProperties.msg= 'some value';

app.mount('#app')

