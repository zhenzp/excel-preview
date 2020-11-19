/*
 * @Descripttion: 
 * @version: 
 * @Author: zhenzipu
 * @Date: 2020-11-13 14:43:12
 * @LastEditors: zhenzipu
 * @LastEditTime: 2020-11-16 14:59:45
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

window.hcVue = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
