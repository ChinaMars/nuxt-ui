<template>
  <div class="mv-select"
    @click="toggleSelect"
    v-clickoutside="handleClose"
  >
    <div
      class="mv-select-input"
    >
      <mv-input
        v-model="value"
        :class="toggleClass"
        :readonly="readonly"
        :placeholder="placeholder"
        @focus="handleFocus"
      ></mv-input>
    </div>
    <transition name="mv-select-fade-down">
      <div v-show="visible" class="mv-select-down">
        <mv-scrollbar :complete="domDon">
          <ul class="mv-option-wrap">
            <slot></slot>
          </ul>
        </mv-scrollbar>
      </div>
    </transition>
  </div>
</template>

<script>
import Input from '@/components/ui/input'
import Scrollbar from '@/components/ui/scrollbar'
import clickoutside from '@/components/ui/directives/clickoutside'
export default {
  name: 'MvSelect',
  components: {
    [Scrollbar.name]: Scrollbar,
    [Input.name]: Input
  },
  directives: { clickoutside },
  props: {
    placeholder: {
      type: String,
      default: '请选择'
    },
    value: {
      type: [String, Number],
      default: null
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
      curValue: null
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
    this.curValue = this.value
    console.log(this)
    this.$on('handleOptionClick', this.handleOptionSelect)
  },
  methods: {
    toggleSelect () {
      this.visible = !this.visible
    },
    handleOptionSelect (option) {
      // console.log(option)
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

    .mv-select-down {
      background-color: #fff;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      height: 160px;
      overflow: hidden;
      padding: 10px 0;
      position: absolute;
      width: 100%;
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
