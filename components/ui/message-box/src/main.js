import Vue from 'vue'
import { isServer } from '../../utils/util'
import main from './main.vue'

const MessageBoxConstructor = Vue.extend(main)

let PromiseAction = {}

const MessageBox = (options = {}) => {
  if (!isServer) { return }
  const instance = new MessageBoxConstructor({
    el: document.createElement('div'),
    data: options
  })
  instance.visible = true
  instance.callback = handleCallBack
  document.body.appendChild(instance.$el)
  return new Promise((resolve, reject) => {
    PromiseAction = {
      resolve,
      reject
    }
  })
}

const handleCallBack = (action) => {
  if (action === 'cancel') {
    PromiseAction.reject()
  } else {
    PromiseAction.resolve()
  }
}

export default MessageBox
