import Vue from 'vue'
import { isServer } from '../utils/util'
import MvMask from '../mask'

export default {
  data () {
    return {
      instanceMask: null,
      defaultOptions: {
        zIndex: 999
      }
    }
  },
  methods: {
    createInstanceMask (options = {}) {
      if (!isServer) { return }
      const Instance = Vue.extend(MvMask)
      options = Object.assign({}, this.defaultOptions, options)
      this.handleOptions(options)
      this.instanceMask = new Instance({
        el: document.createElement('div'),
        data: options
      }).$mount()
      document.body.appendChild(this.instanceMask.$el)
    },
    handleOptions (options) {}
  }
}
