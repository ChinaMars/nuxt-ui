<template>
  <div class="ui-guide">
    <h1>基础 UI组件</h1>
    <div class="block">
      <h2>Loading 加载</h2>
      <mv-button
        :type-style="button.typeStyle"
        @click.native="loading"
      >
        加载
      </mv-button>
    </div>
    <div class="block">
      <h2>Toast 提示框</h2>
      <mv-button
        :type-style="button.typeStyle"
        @click.native="toast"
      >
        提示框
      </mv-button>
    </div>
    <div class="block">
      <h2>Scroll Bar 滚动条</h2>
      <div class="scroll-text">
        <mv-scrollbar :complete="scrollBar">
          <ul>
            <li v-for="(item, index) in 50" :key="index">滚动内容{{ item }}</li>
          </ul>
        </mv-scrollbar>
      </div>
    </div>
    <div class="block">
      <h2>Select 三级联动</h2>
      <div class="select-wrap">
        <mv-select
          v-model="regionModel"
          :placeholder="address.region.placeholder"
          :disabled="address.region.disabled"
          :scroll-bar="scrollBar"
        >
          <mv-option
            v-for="(item, Itemindex) in address.region.options"
            :key="Itemindex"
            :label="item.name"
            :value="item.code"
          ></mv-option>
        </mv-select>
        <mv-select
          v-model="cityModel"
          :placeholder="address.city.placeholder"
          :disabled="address.city.disabled"
          :scroll-bar="scrollBar"
        >
          <mv-option
            v-for="(item, Itemindex) in address.city.options"
            :key="Itemindex"
            :label="item.name"
            :value="item.code"
          ></mv-option>
        </mv-select>
        <mv-select
          v-model="districtModel"
          :placeholder="address.district.placeholder"
          :disabled="address.district.disabled"
          :scroll-bar="scrollBar"
        >
          <mv-option
            v-for="(item, Itemindex) in address.district.options"
            :key="Itemindex"
            :label="item.name"
            :value="item.code"
          ></mv-option>
        </mv-select>
      </div>
    </div>
    <div class="block">
      <h2>Button 按钮</h2>
      <mv-button :type-style="button.typeStyle">按钮</mv-button>
    </div>
    <div class="block">
      <h2>Button Group 组合按钮</h2>
      <mv-button-group>
        <mv-button :type-style="button.typeStyle">按钮1</mv-button>
        <mv-button :type-style="button.typeStyle">按钮2</mv-button>
        <mv-button :type-style="button.typeStyle">按钮3</mv-button>
      </mv-button-group>
    </div>
    <div class="block">
      <h2>Dialog 对话框</h2>
      <mv-button
        :type-style="button.typeStyle"
        @click.native="mvDialog"
      >
        对话框
      </mv-button>
    </div>
    <div class="block">
      <h2>Message Box 信息弹窗</h2>
      <mv-button
        :type-style="button.typeStyle"
        @click.native="mvMessageBox"
      >
        信息弹窗
      </mv-button>
    </div>
    <div class="block">
      <h2>Pagination 分页</h2>
      <mv-pagination
        :page-count="paginate.count"
        :page-range="paginate.pageRange"
        :current-page="paginate.currentPage"
        :page-margin="paginate.pageMargin"
        :prev-text="paginate.prevText"
        :next-text="paginate.nextText"
      >
      </mv-pagination>
      <mv-pagination
        :page-count="paginate.count"
        :page-range="paginate.pageRange"
        :current-page="paginate.currentPage"
        :page-margin="paginate.pageMargin"
      >
      </mv-pagination>
    </div>
    <div class="block">
      <h2>Tabs 标签页</h2>
      <mv-tabs
        @tabs-click="handleTabsClick"
      >
        <mv-tabs-item
          v-for="(item, index) in tabs"
          :key="index"
          :name="item.name"
          :label="item.label"
          :selected="item.selected"
        >
          <span>{{ item.name }}</span>
        </mv-tabs-item>
      </mv-tabs>
    </div>
    <div class="block">
      <h2>抽屉</h2>
      <mv-button
        :type-style="button.typeStyle"
        @click.native="mvDrawer"
      >
        默认打开抽屉方向
      </mv-button>
    </div>
    <mv-drawer
      :visible.sync="drawer.visible"
      :position="drawer.position"
    >
      内容
    </mv-drawer>
    <mv-dialog
      title="提示"
      width="30%"
      :visible.sync="dialogShow"
      :position="`center`"
      :before-close="handleBeforeClose"
      @closed="handleClosed"
    >
      <div class="dialog-content">
        dialog 组件
      </div>
      <div slot="footer" class="dialog-footer-content">
        <mv-button
          @click.native="handleBtnClick"
        >
          取消
        </mv-button>
        <mv-button
          :type="button.type"
          :type-style="button.typeStyle"
          @click.native="handleBtnClick"
        >
          确定
        </mv-button>
      </div>
    </mv-dialog>
  </div>
</template>

<script>
import Vue from 'vue'
import address from '@/assets/json/address'
import {
  Button,
  ButtonGroup,
  Dialog,
  Select,
  Scrollbar,
  Pagination,
  Tabs,
  Drawer
} from '@/components/ui/index'
Vue.use(ButtonGroup)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Scrollbar)
Vue.use(Pagination)
Vue.use(Tabs)
Vue.use(Drawer)
export default {
  data () {
    return {
      scrollBar: true,
      dialogShow: false,
      address: {
        region: {
          placeholder: '请选择省',
          disabled: false,
          options: {}
        },
        city: {
          placeholder: '请选择市',
          disabled: true,
          options: {}
        },
        district: {
          placeholder: '请选择区',
          disabled: true,
          options: {}
        }
      },
      regionModel: 'CN-13',
      cityModel: '',
      districtModel: '',
      button: {
        type: 'submit',
        typeStyle: 'primary'
      },
      paginate: {
        count: 20, // 总页数
        pageRange: 5, // 页码折叠区间数量
        currentPage: 6, // 当前页码
        pageMargin: 2, // 折叠前后出现几个页码按钮
        prevText: '上一页',
        nextText: '下一页'
      },
      tabs: [
        {
          name: '标签1',
          label: 'tab1',
          selected: false
        },
        {
          name: '标签2',
          label: 'tab2',
          selected: true
        },
        {
          name: '标签3',
          label: 'tab3',
          selected: false
        }
      ],
      drawer: {
        visible: false,
        position: 'right'
      }
    }
  },
  watch: {
    regionModel: {
      immediate: true,
      handler (value) {
        const allAddress = address.data
        this.cityModel = ''
        this.districtModel = ''
        if (value !== '') {
          this.address.city.disabled = false
        } else {
          this.address.city.disabled = true
        }
        for (const i in allAddress.region) {
          for (const key in allAddress.region[i]) {
            if (allAddress.region[i][key].code === value) {
              this.address.city.options = allAddress.city[key]
            }
          }
        }
      }
    },
    cityModel (newVal) {
      const allAddress = address.data
      this.districtModel = ''
      this.address.district.disabled = false
      for (const i in allAddress.district) {
        for (const key in allAddress.district[i]) {
          if (allAddress.district[i][key].code === newVal) {
            this.address.district.options = allAddress.district[key]
          }
        }
      }
    }
  },
  created () {
    const allAddress = address.data
    for (const key in allAddress.region) {
      Object.assign(this.address.region.options, allAddress.region[key])
    }
  },
  methods: {
    loading () {
      const loading = this.$loading({
        spinner: 'mv-loading',
        text: '加载中文字更改'
      })
      setTimeout(() => { loading.close() }, 2000)
    },
    toast () {
      this.$toast({
        visible: true,
        duration: 2000,
        message: '加入购物成功'
      })
    },
    mvDialog () {
      this.dialogShow = true
    },
    mvMessageBox () {
      this.$messageBox({
        type: 'confirm',
        zIndex: 1002,
        title: '提示',
        content: '是否删除？',
        cancelButtonText: '取消',
        confirmButtonText: '确定',
        closeByMask: false
      }).then(() => {
        setTimeout(() => {
          alert('reslove')
        }, 1000)
      }).catch(() => {
        setTimeout(() => {
          alert('reject')
        }, 1000)
      })
    },
    mvDrawer () {
      this.drawer.visible = true
    },
    handleBeforeClose (callback) {
      alert('dialog关闭前执行的事件')
      setTimeout(() => {
        const flag = true
        if (callback) {
          callback(flag)
        }
      }, 1000)
    },
    handleClosed () {
      alert('dialog关闭后执行的事件')
    },
    handleBtnClick () {
      this.dialogShow = false
    },
    handleTabsClick (tab) {
      alert(tab.label)
    }
  }
}
</script>

<style lang="scss" scoped>
  .ui-guide {
    padding: 20px 60px;

    h1 {
      margin-bottom: 50px;
    }

    .block {
      margin-bottom: 30px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .select-wrap {
      display: flex;

      .mv-select {
        margin-right: 15px;
      }
    }

    .scroll-text {
      height: 250px;
      overflow: hidden;
      width: 240px;

      li {
        height: 34px;
        line-height: 34px;
      }
    }

    .mv-pagination {
      margin-bottom: 15px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .mv-tabs {
      width: 300px;
    }
  }
</style>
