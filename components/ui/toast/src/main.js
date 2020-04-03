import Vue from 'vue'
import main from './main.vue'
import { isServer } from '@/components/ui/utils/util'

const ToastConstructor = Vue.extend(main)

const Toast = (options = {}) => {
  if (!isServer) { return }
  const instance = new ToastConstructor({
    el: document.createElement('div'),
    data: options
  })
  document.body.appendChild(instance.$el)
  setTimeout(() => {
    instance.visible = false
  }, instance.duration)
}

export default Toast
