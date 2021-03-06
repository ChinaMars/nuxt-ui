<template>
  <transition name="mv-message-box-fade">
    <div
      v-show="visible"
      :style="{'z-index': zIndex}"
      class="mv-message-box-wrap"
      @click.self="handleWrapClick()"
    >
      <div class="mv-message-box">
        <div class="mv-message-box-header">
          <div class="mv-message-box-title">{{ title }}</div>
          <div class="mv-message-box-close" @click="handleClose()">
            <mv-icon name="mv-close"></mv-icon>
          </div>
        </div>
        <div class="mv-message-box-body">
          {{ content }}
        </div>
        <div class="mv-message-box-footer">
          <div class="mv-message-box-btns">
            <mv-button
              v-if="hideCancelButton"
              @click.native="handleAction('cancel')"
            >
              {{ cancelButtonText }}
            </mv-button>
            <mv-button
              type-style="primary"
              @click.native="handleAction('confirm')"
            >
              {{ confirmButtonText }}
            </mv-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import MaskMixin from '../../mixins/mask'
import Button from '../../button'
import Icon from '../../icon'
export default {
  name: 'MvMessageBox',
  components: {
    [Icon.name]: Icon,
    [Button.name]: Button
  },
  mixins: [MaskMixin],
  data () {
    return {
      visible: false,
      zIndex: 1001,
      title: null,
      content: '',
      cancelButtonText: '取消',
      confirmButtonText: '确定',
      closeByMask: true,
      type: 'alert'
    }
  },
  computed: {
    hideCancelButton () {
      return this.type !== 'alert'
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
  created () {
    console.log(this)
  },
  methods: {
    handleAction (action) {
      this.visible = false
      this.callback(action)
    },
    handleWrapClick () {
      if (this.closeByMask) {
        this.visible = false
      }
    },
    handleClose () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss">
  .mv-message-box-wrap {
    align-items: center;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    overflow: auto;
    position: fixed;
    right: 0;
    top: 0;
  }

  .mv-message-box {
    background: $message-box-background-color;
    min-width: 320px;
    padding: 20px;
  }

  .mv-message-box-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .mv-message-box-close {
    cursor: pointer;

    .icon-mv-close {
      font-size: 16px;
    }
  }

  .mv-message-box-title {
    font-size: $message-box-title-font-size;
  }

  .mv-message-box-body {
    color: $font-color-default;
    margin: 20px 0;
  }

  .mv-message-box-footer {
    text-align: right;
  }

  .mv-message-box-fade-enter-active {
    animation: mv-message-box-fade-in 0.3s;
  }

  .mv-message-box-fade-leave-active {
    animation: mv-message-box-fade-out 0.3s;
  }
  @keyframes mv-message-box-fade-in {
    0% {
      opacity: 0;
      transform: translate3d(0, -40px, 0);
    }

    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes mv-message-box-fade-out {
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
