<template>
  <transition name="mv-fade">
    <div
      v-if="visible"
      class="mv-loading-overlay"
      :style="{ background: backgroundColor }"
    >
      <div class="mv-spinner-icon" :class="spinner">图标</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MvLoading',
  data () {
    return {
      visible: false,
      spinner: null,
      backgroundColor: 'rgba(0, 0, 0, 0.6)'
    }
  }
}
</script>

<style lang="scss">
  .mv-loading-overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .mv-fade-enter,
  .mv-fade-leave-active {
    opacity: 0;
  }
  .mv-fade-enter-active,
  .mv-fade-leave-active {
    transition: opacity 0.5s;
  }
</style>
