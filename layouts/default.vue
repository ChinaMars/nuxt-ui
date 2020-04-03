<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
import Vue from 'vue'
import {
  Loading,
  Toast,
  MessageBox
} from '@/components/ui/index'
Vue.use(Loading)
Vue.use(Toast)
Vue.use(MessageBox)
export default {

}
</script>

<style lang="scss" scoped>

</style>
