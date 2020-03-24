<template>
  <div class="ui-guide">
    <div class="block">
      <div @click="loading">loading 加载</div>
    </div>
    <div class="block">
      <div @click="toast">toast 提示</div>
    </div>
    <div class="block">
      <div class="scroll-text">
        <mv-scrollbar :complete="scrollBar">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>4</li>
          </ul>
        </mv-scrollbar>
      </div>
    </div>
    <div class="block">
      <div class="select-wrap">
        <mv-select v-model="addressRegionModel" placeholder="请选择" :disabled="address.region.disabled" :scroll-bar="scrollBar">
          <mv-option
            v-for="(item, Itemindex) in address.region.options"
            :key="Itemindex"
            :label="item.name"
            :value="item.code"
          ></mv-option>
        </mv-select>
        <mv-select v-model="addressCityModel" placeholder="请选择" :disabled="address.city.disabled" :scroll-bar="scrollBar">
          <mv-option
            v-for="(item, Itemindex) in address.city.options"
            :key="Itemindex"
            :label="item.name"
            :value="item.code"
          ></mv-option>
        </mv-select>
      </div>
    </div>
    <div class="block">
      <mv-button-group>
        <mv-button :type-style="button.typeStyle">按钮1</mv-button>
        <mv-button :type-style="button.typeStyle">按钮2</mv-button>
        <mv-button :type-style="button.typeStyle">按钮3</mv-button>
      </mv-button-group>
    </div>
    <div class="block">
      <div class="mv-dialog" @click="mvDialog">dialog 对话框</div>
    </div>
    <mv-dialog
      :visible.sync="dialogShow"
      :position="`center`"
      :before-close="handleBeforeClose"
      title="提示"
      width="30%"
      @closed="handleClosed"
    >
      <div class="dialog-content">
        dialog 组件
      </div>
      <div slot="footer" class="dialog-footer-content">
        <mv-button
          @btnClick="handleBtnClick"
        >
          取消
        </mv-button>
        <mv-button
          :type="button.type"
          :type-style="button.typeStyle"
          @btnClick="handleBtnClick"
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
  Scrollbar
} from '@/components/ui/index'
Vue.use(ButtonGroup)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Scrollbar)
export default {
  data () {
    return {
      scrollBar: true,
      dialogShow: false,
      address: {
        region: {
          disabled: false,
          options: {}
        },
        city: {
          disabled: true,
          options: {}
        },
        district: {
          disabled: true,
          options: {}
        }
      },
      addressRegionModel: '',
      addressCityModel: '',
      button: {
        type: 'submit',
        typeStyle: 'primary'
      }
    }
  },
  watch: {
    addressRegionModel(newVal, oldVal) {
      const allAddress = address.data
      for (const i in allAddress.region) {
        for (const key in allAddress.region[i]) {
          if (allAddress.region[i][key].code === newVal) {
            this.address.city.options = allAddress.city[key]
            this.address.city.disabled = false
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
    handleBeforeClose (callback) {
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
      console.log('button 点击事件')
      this.dialogShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .ui-guide {
    padding: 100px;

    .block {
      margin-bottom: 30px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .select-wrap {
      display: flex;
    }

    .scroll-text {
      height: 50px;
      overflow: hidden;
    }
  }
</style>
