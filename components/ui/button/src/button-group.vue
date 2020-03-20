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
  .mv-button-group{
    display: inline-block;
    .mv-button{
      border: none;
      border-left: 1px solid #FFFFFF;
      float: left;
      &:first-child{
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border: none;
      }
      &:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: 1px solid #FFFFFF;
      }
      &:not(:first-child):not(:last-child){
        border-radius: 0;
      }
    }
    &:before,&:after{
      display: table;
      content: "";
    }
    &:after{
      clear: both;
    }
  }
</style>
