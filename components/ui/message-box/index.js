import MessageBox from './src/main'

MessageBox.install = (Vue) => {
  Vue.prototype.$messageBox = MessageBox
}

export default MessageBox
