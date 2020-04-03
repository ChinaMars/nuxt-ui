<template>
  <div class="mv-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MvButtonGroup'
}
</script>

<style lang="scss">
  .mv-button-group {
    display: inline-block;

    .mv-button {
      border: none;
      border-left: 1px solid #fff;
      float: left;

      &:first-child {
        border: none;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }

      &:last-child {
        border-bottom-left-radius: 0;
        border-left: 1px solid #fff;
        border-top-left-radius: 0;
      }

      &:not(:first-child):not(:last-child) {
        border-radius: 0;
      }
    }

    &::before,
    &::after {
      content: '';
      display: table;
    }

    &::after {
      clear: both;
    }
  }
</style>
