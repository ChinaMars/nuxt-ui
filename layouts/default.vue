<template>
  <div class="layout one-column-layout">
    <header-container></header-container>
    <nuxt />
    <footer-container></footer-container>
  </div>
</template>

<script>
import Vue from 'vue'
import header from '~/components/common/header'
import footer from '~/components/common/footer'
import {
  Loading,
  Toast,
  MessageBox
} from '@/components/ui/index'
import FooterContainer from '../components/common/footer'
Vue.use(Loading)
Vue.use(Toast)
Vue.use(MessageBox)
export default {
  components: {
    FooterContainer,
    [header.name]: header,
    [footer.name]: footer
  }
}
</script>

<style lang="scss" scoped>

</style>
