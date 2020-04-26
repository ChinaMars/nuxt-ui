<template>
  <div class="one-column-layout">
    <header-container></header-container>
    <slot></slot>
    <footer-container></footer-container>
  </div>
</template>

<script>
import header from './header'
import footer from './footer'
export default {
  name: 'OneColumn',
  components: {
    [header.name]: header,
    [footer.name]: footer
  }
}
</script>