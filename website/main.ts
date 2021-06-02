import App from "./App.vue";
import { createApp } from "vue";
import YinUI from 'yin-ui'
import 'theme-chalk/src/index.scss'

createApp(App).use(YinUI).mount('#app')
