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
        :class="toggleClass"
        :readonly="readonly"
        :disabled="disabled"
        :placeholder="placeholder"
        @focus="handleFocus"
      ></mv-input>
      <span class="mv-select-icon">
        <mv-icon name="mv-arrow-down"></mv-icon>
      </span>
    </div>
    <transition name="mv-select-fade-down">
      <div v-show="visible" class="mv-select-down">
        <mv-scrollbar v-if="scrollBar" :complete="domDon">
          <ul class="mv-option-wrap">
            <slot></slot>
          </ul>
        </mv-scrollbar>
        <ul v-else class="mv-option-wrap">
          <slot></slot>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import Input from '@/components/ui/input'
import Scrollbar from '@/components/ui/scrollbar'
import Icon from '@/components/ui/icon'
import clickoutside from '@/components/ui/directives/clickoutside'
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
      default: '请选择'
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
      domDon: false,
      visible: false,
      readonly: true,
      // curValue: null
    }
  },
  computed: {
    toggleClass () {
      return this.visible ? 'open' : ''
    }
  },
  watch: {
    visible (val) {
      if (val) {
        this.domDon = val // 监听dom是否加载完毕
      }
    }
  },
  created () {
    // this.curValue = this.value
    console.log(this.disabled, 'disabled====')
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
      console.log(option)
      if (this.visible) {
        this.toggleSelect()
      }
      this.$emit('input', option.value)
    },
    handleClose () {
      this.visible = false
    },
    handleFocus (value) {
      // console.log(value)
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
      height: 160px;
      overflow: hidden;
      padding: 10px 0;
      position: absolute;
      width: 100%;
      z-index: 9;
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
