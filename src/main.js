/*
 * @Author: your name
 * @Date: 2020-06-02 16:14:28
 * @LastEditTime: 2020-06-11 19:40:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lianjiu-uic:\Users\ASUS\Desktop\vue-template-vant\src\main.js
 */ 
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import store from './store'
import lang from './lang/index'
import './directive'
import './globalComponents/globalComponents'
import 'lib-flexible'
// 按需导入组件
// import { Button } from 'vant';
// 导入所有组件
import Vant from 'vant';
import 'vant/lib/index.less'
// 注册
Vue.use(Vant);
Vue.use(VueI18n)
//定义标识符
const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'zh', // 语言标识
  messages: lang
})

// Vue.use(Button);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  i18n,
  store,
  template: '<App/>'
})
