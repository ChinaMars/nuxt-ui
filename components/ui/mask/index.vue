<template>
  <transition name="mv-mask-fade">
    <div v-if="visible" class="mv-mask" :style="{'z-index': zIndex}"></div>
  </transition>
</template>

<script>
export default {
  name: 'MvMask',
  data () {
    return {
      visible: false,
      zIndex: 999
    }
  },
  watch: {
    show (val) {
      this.visible = val
    }
  }
}
</script>

<style lang="scss">
  .mv-mask{
    position: fixed;
    left: 0;
    top: 0;
    background: #000000;
    width: 100%;
    height: 100%;
    opacity: .5;
  }
  .mv-mask-fade-enter-active {
    animation: mv-mask-fade-in .2s;
  }

  .mv-mask-fade-leave-active {
    animation: mv-mask-fade-out .2s;
  }

  @keyframes mv-mask-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: .5;
    }
  }

  @keyframes mv-mask-fade-out {
    0% {
      opacity: .5;
    }
    100% {
      opacity: 0;
    }
  }
</style>
