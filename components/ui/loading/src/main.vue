<template>
  <transition name="mv-fade">
    <div
      v-if="visible"
      class="mv-loading-overlay"
      :style="{ background: backgroundColor }"
    >
      <div class="mv-loading-spinner">
        <mv-icon v-if="spinner" :name="spinner"></mv-icon>
        <span v-if="text" class="mv-loading-text">{{ text }}</span>
      </div>
    </div>
  </transition>
</template>

<script>
import Icon from '../../icon'
export default {
  name: 'MvLoading',
  components: {
    [Icon.name]: Icon
  },
  data () {
    return {
      visible: false,
      spinner: 'mv-loading',
      text: '加载中...',
      backgroundColor: 'rgba(0, 0, 0, 0.6)'
    }
  }
}
</script>

<style lang="scss">
  .mv-loading-overlay {
    bottom: 0;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .mv-loading-spinner {
    display: flex;
    flex-direction: column;
    left: 0;
    overflow: hidden;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    width: 100%;

    .icon-mv-loading {
      animation: rotating 2s linear infinite;
      color: #fff;
      font-size: 20px;
    }
  }

  .mv-loading-text {
    color: #fff;
  }

  .mv-fade-enter,
  .mv-fade-leave-active {
    opacity: 0;
  }

  .mv-fade-enter-active,
  .mv-fade-leave-active {
    transition: opacity 0.5s;
  }

  @keyframes rotating {
    0% {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>
