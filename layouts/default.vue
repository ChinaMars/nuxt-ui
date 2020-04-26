<template>
  <div class="layout">
    <one-column>
      <nuxt />
    </one-column>
  </div>
</template>

<script>
import OneColumn from '~/components/layout/one-column'
export default {
  components: {
    [OneColumn.name]: OneColumn
  }
}
</script>

<style lang="scss" scoped>

</style>
