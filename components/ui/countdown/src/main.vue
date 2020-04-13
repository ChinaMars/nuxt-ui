<template>
  <div class="mv-countdown">
    <slot v-bind:timeData="timeData">
      {{ timeData }}
    </slot>
  </div>
</template>

<script>
export default {
  name: 'MvCountdown',
  props: {
    seconds: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      interval: null,
      timeData: null
    }
  },
  watch: {
    timeData(value) {
      if (value < 1) {
        this.end()
      }
    }
  },
  computed: {
    onlySeconds() {
      return this.seconds
    }
  },
  created() {
    if (this.onlySeconds) {
      this.timeData = this.seconds
    }
  },
  methods: {
    start() {
      this.$emit('start')
      this.progress()
    },
    progress() {
      if (this.timeData > 0) {
        this.interval = setInterval(() => {
          this.timeData--
        }, 1000)
      }
    },
    end() {
      this.$emit('end')
      this.timeData = 0
      clearTimeout(this.interval)
    }
  }
}
</script>

<style lang="scss">
</style>