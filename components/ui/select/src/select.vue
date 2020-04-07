<template>
  <div v-clickoutside="handleClose"
       class="mv-select"
       @click="toggleSelect"
  >
    <div
      class="mv-select-input"
    >
      <mv-input
        v-model="value"
        :readonly="readonly"
        :placeholder="currentPlaceholder"
        :disabled="disabled"
        @focus="handleFocus"
      ></mv-input>
      <span class="mv-select-icon">
        <mv-icon name="mv-arrow-down"></mv-icon>
      </span>
    </div>
    <transition name="mv-select-fade-down">
      <div v-show="visible" :class="{'auto': !iScrollBar}" class="mv-select-down">
        <mv-scrollbar
          v-if="iScrollBar"
          :complete="domDon"
        >
          <ul class="mv-option-wrap" ref="selectOptions">
            <slot></slot>
          </ul>
        </mv-scrollbar>
        <ul v-else class="mv-option-wrap" ref="selectOptions">
          <slot></slot>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import Input from '../../input'
import Scrollbar from '../../scrollbar'
import Icon from '../../icon'
import clickoutside from '../../directives/clickoutside'
export default {
  name: 'MvSelect',
  components: {
    [Scrollbar.name]: Scrollbar,
    [Input.name]: Input,
    [Icon.name]: Icon
  },
  directives: { clickoutside },
  props: {
    scrollBar: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: () => {
        return '请选择'
      }
    },
    value: {
      type: [String, Number],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  provide () {
    return {
      select: this
    }
  },
  data () {
    return {
      iScrollBar: false,
      domDon: false,
      visible: false,
      readonly: true,
      currentLabel: null,
      currentPlaceholder: null,
      cachePlaceholder: null
    }
  },
  computed: {

  },
  watch: {
    visible (newVal) {
      this.domDon = newVal // 监听dom是否加载完毕
      if (newVal) {
        this.$nextTick(() => {
          if (this.$refs.selectOptions.clientHeight < 170) {
            this.iScrollBar = false
          } else {
            this.iScrollBar = true
          }
        })
      }
    },
    placeholder: {
      immediate: true,
      handler: function (value) {
        this.cachePlaceholder = value
        this.currentPlaceholder = value
      }
    },
    value (newVal) {
      if (newVal === '') {
        this.currentPlaceholder = this.cachePlaceholder
      }
    }
  },
  created () {
    this.iScrollBar = this.scrollBar
    this.$on('handleOptionClick', this.handleOptionSelect)
  },
  methods: {
    toggleSelect () {
      if (this.disabled) {
        this.visible = false
      } else {
        this.visible = !this.visible
      }
    },
    handleOptionSelect (option) {
      if (this.visible) {
        this.toggleSelect()
      }
      this.currentPlaceholder = option.label
      this.$emit('input', option.value)
    },
    handleClose () {
      this.visible = false
    },
    handleFocus (value) {

    }
  }
}
</script>

<style lang="scss">
  .mv-select {
    position: relative;
    width: 240px;

    .mv-input-inner {
      cursor: pointer;
      padding-right: 30px;
    }

    .mv-select-input {
      position: relative;
    }

    .mv-select-icon {
      font-size: 16px;
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translate3d(0, -50%, 0);
    }

    .mv-select-down {
      background-color: #fff;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      height: 170px;
      overflow: hidden;
      position: absolute;
      width: 100%;
      z-index: 9;

      &.auto {
        height: auto;
      }
    }
  }

  .mv-select-fade-down-leave-active {
    animation: slideYOut 0.5s;
  }

  .mv-select-fade-down-enter-active {
    animation: slideYIn 0.5s;
  }
  @keyframes slideYIn {
    from {
      opacity: 0;
      transform: translateY(-15px);
    }

    to {
      opacity: 1;
    }
  }
  @keyframes slideYOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translateY(-15px);
    }
  }
</style>
