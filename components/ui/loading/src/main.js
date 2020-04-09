import Vue from 'vue'
import { isServer } from '../../utils/util'
import main from './main.vue'

const LoadingConstructor = Vue.extend(main)

const defaults = {
  lock: false
}

const Loading = (options = {}) => {
  if (!isServer) { return }
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
