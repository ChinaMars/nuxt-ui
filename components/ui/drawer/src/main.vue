<template>
  <transition
    name="mv-drawer-fade"
  >
    <div
      v-show="visible"
      :style="{'z-index': zIndex}"
      :class="{'open': visible}"
      class="mv-drawer"
      @click.self="handleWrapClick()"
    >
      <div
        :class="positionClass"
        class="mv-drawer-container"
      >
        <div class="mv-drawer-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
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
    position: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 1001
    },
    closeByMask: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    positionClass () {
      if (this.position) {
        return `mv-drawer-${this.position}`
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
      } else {
        this.instanceMask.visible = false
      }
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    },
    handleWrapClick () {
      if (this.closeByMask) {
        this.handleClose()
      }
    }
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

    &.open {
      .mv-drawer-right {
        animation: right-drawer-in 0.3s 1ms;
      }
    }

    .mv-drawer-right {
      animation: right-drawer-out 0.3s 1ms;
    }
  }

  .mv-drawer-container {
    background: #fff;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 30%;
  }

  .mv-drawer-content {
    padding: 20px;
  }

  @keyframes mv-drawer-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes mv-drawer-fade-out {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  .mv-drawer-fade-enter-active {
    animation: mv-drawer-fade-in 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  .mv-drawer-fade-leave-active {
    animation: mv-drawer-fade-out 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  @mixin drawer-animation($direction) {
    @keyframes #{$direction}-drawer-in {
      0% {
        @if $direction == right {
          transform: translate(100%);
        }
      }

      100% {
        transform: translate(0);
      }
    }

    @keyframes #{$direction}-drawer-out {
      0% {
        @if $direction == right {
          transform: translate(0);
        }
      }

      100% {
        @if $direction == right {
          transform: translate(100%);
        }
      }
    }
  }
  @include drawer-animation(right)
</style>
