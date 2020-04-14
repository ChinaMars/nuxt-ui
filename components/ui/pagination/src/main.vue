<template>
  <div class="mv-pagination">
    <mv-button
      :class="buttonClass(prevText)"
      :icon="prevText ? '' : `icon-mv-arrow-left`"
      :disabled="curPage < 2"
      class="pagination-button-prev pagination-button"
      @click.native="prevBtnClick()"
    >
      {{ prevText }}
    </mv-button>
    <ul class="mv-pager">
      <li
        v-for="(item, index) in pages"
        :key="index"
        :class="{'current': item.number === curPage}"
        @click="onPagerClick(item)"
      >
        <span v-if="item.number">{{ item.number }}</span>
        <span v-if="item.omitted">{{ omittedPageText }}</span>
      </li>
    </ul>
    <mv-button
      :class="buttonClass(nextText)"
      :icon="nextText ? '' : `icon-mv-arrow-right`"
      :disabled="curPage > pageCount - 1"
      class="pagination-button-next pagination-button"
      @click.native="nextBtnClick()"
    >
      {{ nextText }}
    </mv-button>
    <!--{{ pages }}-->
  </div>
</template>

<script>
import Button from '../../button'
export default {
  name: 'MvPagination',
  components: {
    [Button.name]: Button
  },
  props: {
    // 总页数
    pageCount: {
      type: Number,
      required: true
    },
    // 当前页数
    currentPage: {
      type: Number,
      default: 1
    },
    // 折叠符号
    omittedPageText: {
      type: String,
      default: '...'
    },
    // 折叠前后出现几个页码按钮
    pageMargin: {
      type: Number,
      default: 1
    },
    // 页码折叠区间数量
    pageRange: {
      type: Number,
      default: 3
    },
    // 上一页文字
    prevText: {
      type: String,
      default: ''
    },
    // 下一页文字
    nextText: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      curPage: null
    }
  },
  computed: {
    pages () {
      const pagerItem = {}
      const pageCount = this.pageCount
      const pageRange = this.pageRange
      const pageMargin = this.pageMargin
      const setPagerItem = (index) => {
        const page = {
          key: index,
          number: index + 1
        }

        pagerItem[index] = page
      }
      const setBreakView = (index) => {
        const breakView = {
          omitted: true
        }

        pagerItem[index] = breakView
      }
      if (pageCount <= pageRange) {
        for (let i = 0; i < pageCount; i++) {
          setPagerItem(i)
        }
      } else {
        const halfPageRange = Math.floor(pageRange / 2)
        let selectedRangeLow = 0

        // 1 循环折叠前的页码
        for (let i = 0; i < pageMargin; i++) {
          setPagerItem(i)
        }

        // 2 循环折叠中间的页码
        // 当前页码只有满足了 pageRange 和 pageMargin 条件下selectedRangeLow才相应改变
        if (this.curPage - halfPageRange > 0) {
          if (this.curPage / 2 > halfPageRange) {
            selectedRangeLow = this.curPage - 1 - halfPageRange
          }
        }

        let selectedRangeHigh = selectedRangeLow + pageRange - 1

        if (selectedRangeHigh >= pageCount - halfPageRange) {
          selectedRangeLow = pageCount - pageRange
        }

        if (selectedRangeHigh >= pageCount) {
          selectedRangeHigh = pageCount - 1
          selectedRangeLow = selectedRangeHigh - pageRange + 1
        }

        for (let i = selectedRangeLow; i <= selectedRangeHigh && i <= pageCount - 1; i++) {
          setPagerItem(i)
        }

        // 满足条件后改变对应标识下的值
        if (selectedRangeLow > pageMargin) {
          setBreakView(selectedRangeLow - 1)
        }

        // 满足条件后改变对应标识下的值
        if (selectedRangeHigh + 1 < pageCount - pageMargin) {
          setBreakView(selectedRangeHigh + 1)
        }

        // 3 循环折叠后的页码
        for (let i = pageCount - 1; i >= pageCount - pageMargin; i--) {
          setPagerItem(i)
        }
      }
      return pagerItem
    },
    buttonClass () {
      return (text) => {
        return text !== '' ? 'pagination-button-text' : 'pagination-button-icon'
      }
    }
  },
  watch: {
    curPage (newVal) {
      this.$emit('current-change', newVal)
    }
  },
  created () {
    this.curPage = this.currentPage
  },
  methods: {
    onPagerClick (data) {
      if (data.omitted) { return false }
      this.curPage = data.number
    },
    prevBtnClick () {
      this.curPage = this.curPage - 1
      this.$emit('prev-click', this.curPage)
    },
    nextBtnClick () {
      this.curPage = this.curPage + 1
      this.$emit('next-click', this.curPage)
    }
  }
}
</script>

<style lang="scss">
  .mv-pagination {
    display: flex;

    .pagination-button {
      background: transparent;
      border: 0;
      padding: 2px;
    }

    .pagination-button-text {
      padding: 2px 5px;

      &:disabled {
        span,
        span:hover {
          color: $pagination-button-disabled-color;
        }
      }

      span {
        color: $pagination-button-color;

        &:hover {
          color: $pagination-button-hover-color;
        }
      }
    }

    .pagination-button-icon {
      &:disabled {
        .icon,
        .icon:hover {
          color: $pagination-button-disabled-color;
        }
      }
    }

    .icon {
      color: $pagination-button-color;
      font-size: 24px;

      &:hover {
        color: $pagination-button-hover-color;
      }
    }
  }

  .mv-pager {
    display: flex;
    user-select: none;

    li {
      align-items: center;
      background: $pagination-page-background-color;
      cursor: pointer;
      display: flex;
      height: 30px;
      justify-content: center;
      margin: 0 5px;
      padding: 2px;
      width: 30px;

      &:hover {
        background: $pagination-page-hover-background-color;
        color: $pagination-page-hover-color;
      }

      &.current {
        background: $pagination-page-actived-background-color;
        color: $pagination-page-actived-color;
      }
    }
  }
</style>
