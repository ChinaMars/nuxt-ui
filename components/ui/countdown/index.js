import Countdown from './src/main'

Countdown.install = function (Vue) {
  Vue.component(Countdown.name, Countdown)
}

export default Countdown
