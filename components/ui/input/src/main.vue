<template>
  <div class="mv-input">
    <input
      ref="input"
      v-bind="$attrs"
      :type="type"
      :class="inputClass"
      @focus="handleFocus"
      @input="handleInput"
      class="mv-input-inner"
    >
  </div>
</template>

<script>
export default {
  name: 'MvInput',
  props: {
    type: {
      type: String,
      default: 'text'
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
  inheritAttrs: false,
  computed: {
    inputClass() {
      const className = [
        {'is-disabled': this.disabled}
      ]
      return className
    }
  },
  watch: {
    value(val) {

    }
  },
  created () {

  },
  methods: {
    handleInput (event) {
      this.$emit('input', event.target.value)
    },
    handleFocus (event) {
      this.$emit('focus', event.target.value)
    }
  }
}
</script>

<style lang="scss">
  .mv-input {
    .mv-input-inner {
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      box-sizing: border-box;
      display: inline-block;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      width: 100%;

      &.is-disabled {
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor: not-allowed;
      }
    }
  }
</style>
