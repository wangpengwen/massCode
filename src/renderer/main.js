import Vue from 'vue'
import App from './App'
import store from './store'
import db from '@/datastore'
import electronStore from '@@/store'
import { clickOutside } from './directives'
import UiKit from '@/components/uikit'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.config.productionTip = false
Vue.prototype.$db = db
Vue.prototype.$electronStore = electronStore

Vue.directive('click-outside', clickOutside)
Vue.use(UiKit)

/* eslint-disable no-new */
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
