<template>
  <div class="mv-tabs">
    <div class="mv-tabs-bar">
      <ul>
        <li
          v-for="(tab, tabIndex) in tabs"
          :key="tabIndex"
          :class="{'active': tab.isActive}"
        >
          <span @click="selectTab(tab)">{{ tab.name }}</span>
        </li>
      </ul>
    </div>
    <div v-if="$slots.default" class="mv-tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MvTabs',
  data () {
    return {
      tabs: []
    }
  },
  created () {
    this.tabs = this.$children
  },
  mounted () {

  },
  methods: {
    selectTab (selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = (tab.name === selectedTab.name)
      })
      this.$emit('tabs-click', selectedTab)
    }
  }
}
</script>

<style lang="scss">
  .mv-tabs-bar {
    margin-bottom: 15px;
    position: relative;

    &::after {
      background: $tabs-bar-line-color;
      bottom: 0;
      content: '';
      height: 2px;
      left: 0;
      position: absolute;
      width: 100%;
    }

    ul {
      display: flex;
    }

    li {
      color: $tabs-bar-font-color;
      cursor: pointer;
      font-size: $tabs-bar-font-size;
      font-weight: $font-weight-default;
      height: 40px;
      line-height: 40px;
      padding: 0 20px;

      &:first-child {
        padding-left: 0;
      }

      &.active {
        color: $tabs-bar-actived-color;
      }
    }
  }
</style>
