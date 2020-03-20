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
  .mv-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px
  }
  .mv-button:focus, .mv-button:hover{
    color: #FFFFFF;
    border-color: #c6e2ff;
    background-color: #000000;
  }
  .mv-button-primary{
    background-color: #000000;
    color: #FFFFFF
  }
  .mv-button-primary:focus, .mv-button-primary:hover{
    color: #FFFFFF;
    border-color: #c6e2ff;
    background-color: #4b4b4b;
  }
</style>
