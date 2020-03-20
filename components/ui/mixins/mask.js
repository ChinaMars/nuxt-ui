import Vue from 'vue'
import { isClient } from '@/components/ui/utils/util'
import MvMask from '@/components/ui/mask'

export default {
  data () {
    return {
      instanceMask: null,
      defaultOptions: {
        zIndex: 99
      }
    }
  },
  methods: {
    createInstanceMask (options = {}) {
      if (!isClient) { return }
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
