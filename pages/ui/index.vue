<template>
  <div class="ui-guide">
    <div @click="loading">loading 加载</div>
    <div @click="toast">toast 提示</div>
    <div class="scroll-text">
      <mv-scrollbar>
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
    {{ addressModel }}
    <mv-select v-model="addressModel" placeholder="请选择">
      <mv-option
        v-for="(item, Itemindex) in address.region"
        :key="Itemindex"
        :label="item.name"
        :value="item.code"
      ></mv-option>
    </mv-select>
    <mv-button-group>
      <mv-button :type-style="button.typeStyle">按钮1</mv-button>
      <mv-button :type-style="button.typeStyle">按钮2</mv-button>
      <mv-button :type-style="button.typeStyle">按钮3</mv-button>
    </mv-button-group>
    <div class="mv-dialog" @click="mvDialog">dialog 对话框</div>
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
      dialogShow: false,
      address: {
        region: {},
        city: {},
        district: {}
      },
      addressModel: 'CN-2',
      button: {
        type: 'submit',
        typeStyle: 'primary'
      }
    }
  },
  created () {
    const allAddress = address.data
    for (const key in allAddress) {
      for (const i in allAddress[key]) {
        this.address[key][i] = allAddress[key][i][i]
      }
    }
  },
  methods: {
    loading () {
      const loading = this.$loading()
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

    .scroll-text {
      height: 50px;
      overflow: hidden;
    }
  }
</style>
