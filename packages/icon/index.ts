import { App, defineComponent, createApp } from "vue"
import Icon from './src/icon.vue'

Icon.install = (app: App): void => {
  console.log('buuton 组件注册')
  app.component(Icon.name, Icon)
}

export default Icon