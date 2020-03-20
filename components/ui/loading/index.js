import Loading from './src/main'

Loading.install = (Vue) => {
  Vue.prototype.$loading = Loading
}

export default Loading
