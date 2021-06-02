import { App, defineComponent, createApp } from "vue"
import Button from './src/button.vue'

Button.install = (app: App): void => {
  console.log('buuton 组件注册')
  app.component(Button.name, Button)
}

export default Button