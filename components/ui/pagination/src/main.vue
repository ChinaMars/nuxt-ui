<template>
  <div class="mv-pagination">
    <mv-button
      icon="icon-mv-arrow-left"
      class="button-prev"
      :disabled="curPage < 2"
      @btnClick="prevBtnClick()"
    ></mv-button>
    <ul class="mv-pager">
      <li
        :class="{'current': item.number === curPage}"
        v-for="(item, index) in pages"
        :key="index"
        @click="onPagerClick(item)"
      >
        <span v-if="item.number">{{item.number}}</span>
        <span v-if="item.omitted">{{ omittedPageText }}</span>
      </li>
    </ul>
    <mv-button
      icon="icon-mv-arrow-right"
      class="button-next"
      :disabled="curPage > pageCount - 1"
      @btnClick="nextBtnClick()"
    ></mv-button>
    <!--{{ pages }}-->
  </div>
</template>

<script>
import Button from '@/components/ui/button'
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
    }
  },
  data() {
    return{
      curPage: null
    }
  },
  watch: {
    curPage(newVal) {
      this.$emit('current-change', newVal)
    }
  },
  computed: {
    pages() {
      let pagerItem = {}
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
      const setBreakView = index => {
        const breakView = {
          omitted: true
        }

        pagerItem[index] = breakView
      }
      if (pageCount <= pageRange) {
        for (let i = 0;  i < pageCount; i++) {
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
      console.log(pagerItem, 'pagerItem')
      return pagerItem
    }
  },
  created() {
    this.curPage = this.currentPage
  },
  methods: {
    onPagerClick(data) {
      if (data.omitted) return false
      this.curPage = data.number
    },
    prevBtnClick() {
      this.curPage = this.curPage - 1
      this.$emit('prev-click', this.curPage)
    },
    nextBtnClick() {
      this.curPage = this.curPage + 1
      this.$emit('next-click', this.curPage)
    }
  }
}
</script>

<style lang="scss">
  .mv-pagination {
    display: flex;

    .button-prev,
    .button-next {
      background: transparent;
      border: 0;
      padding: 2px;

      &:disabled {
        .icon {
          color: #ccc;

          &:hover {
            color: #ccc;
          }
        }
      }
    }

    .icon {
      color: #7f828b;
      font-size: 24px;

      &:hover {
        color: #000;
      }
    }
  }

  .mv-pager {
    display: flex;
    user-select: none;

    li {
      align-items: center;
      background: #f4f4f5;
      cursor: pointer;
      display: flex;
      height: 30px;
      justify-content: center;
      margin: 0 5px;
      padding: 2px;
      width: 30px;

      &.current {
        background: #000;
        color: #fff;
      }
    }
  }
</style>
