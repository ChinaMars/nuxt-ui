<template>
  <header class="header-container">
    <header-menu :menu-data="headerMenu"></header-menu>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import Menu from '../header/menu'
export default {
  name: 'HeaderContainer',
  components: {
    [Menu.name]: Menu
  },
  data(){
    return {}
  },
  computed: {
    ...mapState('global', ['user', 'headerMenu'])
  }
}
</script>

<style lang="scss">
</style>
