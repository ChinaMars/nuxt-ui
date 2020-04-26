<template>
  <div class="menu-list">
    <nav class="navigation">
      <ul class="js-main-navigation">
        <li
          v-for="(item, index) in MenuData"
          :key="index"
          :class="`level-${item.level}`"
          @mouseenter="mouseenterItem(item)"
          @mouseleave="mouseleaveItem(item)"
        >
          <a v-if="item.url" class="category-link" :href="item.url" @click="gtmMenuClick(item)">
            {{ item.name }}
          </a>
          <span v-else class="category-link">{{ item.name }}</span>
          <div class="js-link-wrapper" :class="isOpen(item.id,item.items)">
            <div class="inner">
              <ul :class="`level-${item.level+1}`">
                <li v-for="(subitem, subIndex) in item.items" :key="subIndex">
                  <h2 class="bold-family">
                    <a v-if="subitem.url" :href="subitem.url" @click="gtmMenuClick(subitem)">
                      {{ subitem.name }}
                    </a>
                    <span v-else>{{ subitem.name }}</span>
                  </h2>
                  <div v-if="subitem.image" class="banner"><img :src="subitem.image" /></div>
                  <ul v-if="subitem.items.length > 0" :class="`level-${subitem.level+1}`">
                    <li v-for="(childItem, childIndex) in subitem.items" :key="childIndex">
                      <a v-if="childItem.url" :class="{'bold-family all-view' : childItem.name === '查看全部'}" :href="childItem.url" @click="gtmMenuClick(childItem)">{{ childItem.name }}</a>
                      <span v-else>{{ childItem.name }}</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderMenu',
  props: {
    MenuData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentItem: null
    }
  },
  computed: {
    isOpen() {
      return (id, subitem) => {
        return this.currentItem === id && subitem.length > 0 ? 'open' : ''
      }
    }
  },
  methods: {
    mouseenterItem(item) {
      this.currentItem = item.id
    },
    mouseleaveItem() {
      this.currentItem = null
    }
  }
}
</script>

<style lang="scss">
  .menu-list {
    .js-main-navigation {
      > li {
        @include responsive(md) {
          padding: 0 20px;
        }
        @include responsive(lg) {
          padding: 0 30px;
        }
      }
      @include flex-center;
    }

    .js-link-wrapper {
      background: $color-light;
      border-top: 1px solid $color-dark-grep-light;
      display: none;
      left: 0;
      min-height: 300px;
      padding: 30px 15px 40px;
      position: absolute;
      width: 100%;
      z-index: 9;

      &.open {
        display: block;
      }

      a {
        &:hover {
          text-decoration: underline;
        }

        &.all-view {
          color: $color-dark;
          font-weight: 600;
        }
      }

      .level-2 {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        > li {
          display: flex;
          flex-direction: column;
          margin: 0 15px 40px;
          padding-left: 8px;
          width: 12.6%;

          h2 {
            padding-left: 15px;
            position: relative;

            &::after {
              background: $color-fendi;
              content: '';
              display: block;
              height: 12px;
              left: 0;
              position: absolute;
              top: -1px;
              width: 4px;
            }
          }

          .banner {
            margin-top: 10px;
          }
        }
      }

      .level-3 {
        li { color: #71716f;
          margin-top: 15px;
        }
      }
    }
  }
</style>