<template>
  <li
    :class="{'selected': selected}"
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
    currentValue() {
      return this.select.value
    },
    selected() {
      return this.checkedSelected(this.currentValue, this.value)
    }
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
    },
    checkedSelected (value, value2) {
      return value === value2
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

      &.selected {
        background: #f5f7fa;
      }

      &:hover {
        background: #f5f7fa;
      }
    }
  }
</style>
