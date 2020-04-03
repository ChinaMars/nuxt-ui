<template>
  <button
    class="mv-button"
    :type="type"
    :class="`mv-button-${typeStyle}`"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon" class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
import Icon from '@/components/ui/icon'
export default {
  name: 'MvButton',
  components: {
    [Icon.name]: Icon
  },
  props: {
    type: {
      type: String,
      default: 'button'
    },
    typeStyle: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
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
    user-select: none;
    white-space: nowrap;

    &:disabled {
      cursor: not-allowed;
    }
  }

  .mv-button:hover {
    background-color: #000;
    color: #fff;
  }

  .mv-button-primary {
    background-color: #000;
    border-color: #000;
    color: #fff;
  }

  .mv-button-primary:hover {
    background-color: #4b4b4b;
    color: #fff;
  }
</style>
