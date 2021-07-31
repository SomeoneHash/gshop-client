import Vue from 'vue'
import App from './App.vue'

// 关闭生产提示 浏览器控制台不显示非生产环境打包的提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

/* eslint-disable no-unused-vars */
// const a = 123