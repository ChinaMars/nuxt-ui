<template>
  <div class="mv-input">
    <input
      ref="input"
      v-bind="$attrs"
      :type="type"
      :readonly="readonly"
      class="mv-input-inner"
      @focus="handleFocus"
      @input="handleInput"
    >
  </div>
</template>

<script>
export default {
  name: 'MvInput',
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: null
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  computed: {

  },
  created () {
    console.log(this.value)
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
  .mv-input{
    .mv-input-inner{
      outline: none;
      width: 100%;
      height: 40px;
      line-height: 40px;
    }
  }
</style>
