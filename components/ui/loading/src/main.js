import Vue from 'vue'
import main from './main.vue'
import { isClient } from '@/components/ui/utils/util'

const LoadingConstructor = Vue.extend(main)

const defaults = {
  lock: false
}

const Loading = (options = {}) => {
  if (!isClient) { return }
  options = Object.assign({}, defaults, options)
  const instance = new LoadingConstructor({
    data: options
  })
  document.body.appendChild(instance.$mount().$el)
  instance.visible = true
  return {
    close () {
      setTimeout(() => {
        instance.visible = false
      }, 600)
    }
  }
}

export default Loading
