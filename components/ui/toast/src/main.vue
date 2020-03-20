<template>
  <transition name="mv-toast-fade">
    <div v-if="visible" class="mv-toast">
      <div class="mv-toast-container">
        <div class="mv-toast-content">
          <span>{{ message }}</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MvToast',
  data () {
    return {
      visible: false,
      duration: 1500,
      message: ''
    }
  }
}
</script>

<style lang="scss">
  .mv-toast{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .mv-toast-container{
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
  }
  .mv-toast-content{
    background: #000000;
    color: #FFFFFF;
    padding: 20px;
    border-radius: 10px;
  }
  .mv-toast-fade-enter-active {
    animation: mv-toast-fade-in .2s;
  }
  .mv-toast-fade-leave-active {
    animation: mv-toast-fade-out .2s;
  }
  @keyframes mv-toast-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: .5;
    }
  }
  @keyframes mv-toast-fade-out {
    0% {
      opacity: .5;
    }
    100% {
      opacity: 0;
    }
  }
</style>
