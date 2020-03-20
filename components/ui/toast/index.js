import Toast from './src/main'

Toast.install = (Vue) => {
  Vue.prototype.$toast = Toast
}

export default Toast
