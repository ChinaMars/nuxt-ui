<template>
  <button
    class="mv-button"
    :type="type"
    :class="`mv-button-${typeStyle}`"
    @click="handleClick"
  >
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'MvButton',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    typeStyle: {
      type: String,
      default: 'default'
    }
  },
  computed: {

  },
  methods: {
    handleClick () {
      this.$emit('btnClick')
    }
  }
}
</script>

<style lang="scss">
  .mv-button {
    -webkit-appearance: none;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    margin: 0;
    outline: none;
    padding: 12px 20px;
    text-align: center;
    transition: 0.1s;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    white-space: nowrap;
  }

  .mv-button:focus,
  .mv-button:hover {
    background-color: #000;
    border-color: #c6e2ff;
    color: #fff;
  }

  .mv-button-primary {
    background-color: #000;
    color: #fff;
  }

  .mv-button-primary:focus,
  .mv-button-primary:hover {
    background-color: #4b4b4b;
    border-color: #c6e2ff;
    color: #fff;
  }
</style>
