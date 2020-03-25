<template>
  <li
    class="mv-option"
    @click.stop="optionClick"
  >
    <slot>
      <span>{{ currentLabel }}</span>
    </slot>
  </li>
</template>

<script>
import findCompontent from '@/components/ui/utils/find-compontent'
export default {
  name: 'MvOption',
  data() {
    return {
      currentLabel: null
    }
  },
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    label: {
      type: [String, Number],
      default: null
    }
  },
  inject: ['select'],
  computed: {

  },
  watch: {

  },
  created () {
    this.currentLabel = this.label
  },
  methods: {
    optionClick () {
      const getCompontent = findCompontent(this, 'MvSelect')
      getCompontent.$emit('handleOptionClick', this)
    }
  }
}
</script>

<style lang="scss">
  .mv-option-wrap {
    .mv-option {
      cursor: pointer;
      font-size: 14px;
      height: 34px;
      line-height: 34px;
      padding: 0 20px;

      &:hover {
        background: #f5f7fa;
      }
    }
  }
</style>
