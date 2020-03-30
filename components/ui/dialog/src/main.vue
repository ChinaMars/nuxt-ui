<template>
  <transition name="mv-dialog-fade">
    <div
      v-show="visible"
      class="mv-dialog-wrap"
      :style="{'z-index': zIndex}"
      :class="positionClass"
    >
      <div class="mv-dialog" :style="style">
        <div class="mv-dialog-header">
          <slot name="title">
            <div class="mv-dialog-title">{{ title }}</div>
          </slot>
          <div class="mv-dialog-close" @click="handleClose">
            <mv-icon name="mv-close"></mv-icon>
          </div>
        </div>
        <div class="mv-dialog-body">
          <slot></slot>
        </div>
        <div v-if="$slots.footer" class="mv-dialog-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import MaskMixin from '@/components/ui/mixins/mask'
import Icon from '@/components/ui/icon'
export default {
  name: 'MvDialog',
  components: {
    [Icon.name]: Icon
  },
  mixins: [MaskMixin],
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'auto'
    },
    zIndex: {
      type: Number,
      default: 1001
    },
    width: {
      type: String,
      default: '30%'
    },
    title: {
      type: String,
      default: ''
    },
    beforeClose: {
      type: Function,
      default: null
    }
  },
  computed: {
    style () {
      const style = {}
      style.width = this.width
      return style
    },
    positionClass () {
      let className = ''
      if (this.position) {
        className = `mv-dialog-${this.position}`
      }
      return className
    }
  },
  watch: {
    visible (val) {
      if (val) {
        this.createInstanceMask({
          visible: true
        })
      } else {
        this.instanceMask.visible = false
      }
    }
  },
  methods: {
    handleClose () {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hideDialog)
      } else {
        this.hideDialog()
      }
    },
    hideDialog (res) {
      if (res) {
        this.$emit('update:visible', false)
        this.$emit('closed')
      }
    }
  }
}
</script>

<style lang="scss">
  .mv-dialog-wrap {
    bottom: 0;
    left: 0;
    overflow: auto;
    position: fixed;
    right: 0;
    top: 0;

    &.mv-dialog-center {
      align-items: center;
      display: flex;
      justify-content: center;
    }

    .mv-dialog-auto {
      margin: 100px auto 50px;
    }

    .mv-dialog {
      background: #fff;
      padding: 20px;
    }

    .mv-dialog-header {
      display: flex;
      justify-content: space-between;
    }

    .mv-dialog-title {
      font-size: 18px;
    }

    .mv-dialog-close {
      cursor: pointer;

      .icon-mv-close {
        font-size: 16px;
      }
    }

    .mv-dialog-body {
      padding: 20px 0;
    }

    .mv-dialog-footer {
      text-align: right;
    }
  }

  .mv-dialog-fade-enter-active {
    animation: mv-dialog-fade-in 0.3s;
  }

  .mv-dialog-fade-leave-active {
    animation: mv-dialog-fade-out 0.3s;
  }
  @keyframes mv-dialog-fade-in {
    0% {
      opacity: 0;
      transform: translate3d(0, -40px, 0);
    }

    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes mv-dialog-fade-out {
    0% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    100% {
      opacity: 0;
      transform: translate3d(0, -40px, 0);
    }
  }
</style>
