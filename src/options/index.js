import Vue from 'vue'

import {
  Form,
  FormItem,
  Select,
  Option,
} from 'element-ui'

import App from './App.vue'

const elementUI = [
  Form,
  FormItem,
  Select,
  Option
]

Vue.prototype.$ELEMENT = { size: 'small' }

elementUI.forEach((comp) => {
  Vue.use(comp)
})

new Vue({
  el: '#app',
  render: (h) => h(App)
})
