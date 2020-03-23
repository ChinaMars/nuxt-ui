<template>
  <div ref="scrollbar" class="mv-scrollbar">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import ScrollBar from '@better-scroll/scroll-bar'
import MouseWheel from '@better-scroll/mouse-wheel'
import { isMobile } from 'mobile-device-detect'
BScroll.use(MouseWheel)
BScroll.use(ScrollBar)
export default {
  name: 'MvScrollbar',
  props: {
    complete: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      options: {
        scrollY: true,
        scrollbar: {
          fade: true,
          interactive: true
        },
        mouseWheel: true,
        disableMouse: !isMobile
      }
    }
  },
  watch: {
    complete (val) {
      if (val) {
        // 监听dom是否加载完毕，重新实例化
        this.$nextTick(() => {
          /* eslint-disable no-new */
          new BScroll(this.$refs.scrollbar, this.options)
        })
      }
    }
  },
  created () {
    console.log(isMobile)
  },
  mounted () {
    this.$nextTick(() => {
      new BScroll(this.$refs.scrollbar, this.options)
    })
  }
}
</script>

<style lang="scss">
  .mv-scrollbar {
    height: 100%;
    overflow: hidden;
    position: relative;
  }
</style>
