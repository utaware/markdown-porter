import Vue from 'vue'

import { Form, FormItem, Select, Option, Button, Card } from 'element-ui'

import App from './App.vue'

const elementUI = [Form, FormItem, Select, Option, Button, Card]

Vue.prototype.$ELEMENT = { size: 'medium' }

elementUI.forEach((comp) => {
  Vue.use(comp)
})

new Vue({
  el: '#app',
  render: (h) => h(App),
})
