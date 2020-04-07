<template>
  <div
    v-show="visible"
    class="mv-drawer"
  >
    <div
      :class="positionClass"
      :style="{width: width}"
      class="mv-drawer-container"
    >
      <div class="mv-drawer-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import MaskMixin from '../../mixins/mask'
export default {
  name: 'MvDrawer',
  mixins: [MaskMixin],
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: 'auto'
    },
    position: {
      type: String,
      default: ''
    }
  },
  computed: {
    positionClass () {
      if (this.position) {
        return `mv-popup-${this.position}`
      } else {
        return ''
      }
    }
  },
  watch: {
    visible (val) {
      if (val) {
        this.createInstanceMask({
          show: true
        })
      }
    }
  },
  created () {

  }
}
</script>

<style lang="scss">
  .mv-drawer {
    bottom: 0;
    height: 100%;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;

    .mv-drawer-container {
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
