import { App } from "vue";

import Button from '@yin-ui/button'
import Icon from '@yin-ui/icon'

const components = [
  Button,
  Icon
]

const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}