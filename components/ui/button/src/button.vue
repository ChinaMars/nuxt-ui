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
import Icon from '../../icon'
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
      this.$emit('btn-click')
    }
  }
}
</script>

<style lang="scss">
  .mv-button {
    background: $button-default-background-color;
    border: 1px solid $button-default-border-color;
    border-radius: $border-radius-default;
    box-sizing: border-box;
    color: $button-default-font-color;
    cursor: pointer;
    display: inline-block;
    font-size: $button-font-size;
    font-weight: $font-weight-default;
    outline: none;
    padding: 12px 20px;
    text-align: center;
    transition: 0.3s;
    user-select: none;
    white-space: nowrap;

    &:disabled {
      cursor: not-allowed;
    }
  }

  .mv-button:hover {
    background-color: $button-primary-background-color;
    color: $button-primary-font-color;
  }

  .mv-button-primary {
    background-color: $button-primary-background-color;
    border-color: $button-primary-border-color;
    color: $button-primary-font-color;
  }

  .mv-button-primary:hover {
    background-color: $color-primary-light-3;
    color: $button-primary-font-color;
  }
</style>
