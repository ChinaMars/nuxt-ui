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
      background: #000;
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
      color: #7f828b;
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      height: 40px;
      line-height: 40px;
      padding: 0 20px;

      &:first-child {
        padding-left: 0;
      }

      &.active {
        color: #000;
      }
    }
  }
</style>
