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
  .mv-mask {
    background: #000;
    bottom: 0;
    height: 100%;
    left: 0;
    opacity: 0.5;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .mv-mask-fade-enter-active {
    animation: mv-mask-fade-in 0.2s;
  }

  .mv-mask-fade-leave-active {
    animation: mv-mask-fade-out 0.2s;
  }

  @keyframes mv-mask-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 0.5;
    }
  }

  @keyframes mv-mask-fade-out {
    0% {
      opacity: 0.5;
    }

    100% {
      opacity: 0;
    }
  }
</style>
