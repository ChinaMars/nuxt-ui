import Tabs from './src/tabs'
import TabsItem from './src/tabs-item'

Tabs.install = function (Vue) {
  Vue.component(Tabs.name, Tabs)
  Vue.component(TabsItem.name, TabsItem)
}

export default Tabs