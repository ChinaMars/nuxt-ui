<template>
  <div
    v-show="isActive"
    :class="`mv-tabs-${label}`"
    class="mv-tabs-item"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MvTabsItem',
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isActive: false
    }
  },
  mounted () {
    this.isActive = this.selected
  }
}
</script>

<style lang="scss">
</style>
