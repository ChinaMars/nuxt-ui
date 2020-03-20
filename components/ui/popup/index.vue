<template>
  <div class="mv-popup">
    <div class="mv-popup-container" :class="positionClass" :style="{width: width}">
      <div class="mv-popup-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import MaskMixin from '@/components/ui/mixins/mask'
export default {
  name: 'MvPopup',
  mixins: [MaskMixin],
  props: {
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
  created () {
    this.createInstanceMask({
      show: true
    })
  }
}
</script>

<style lang="scss">
  .mv-popup{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    .mv-popup-container{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
  }
</style>
