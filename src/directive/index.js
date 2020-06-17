/*
 * @Author: your name
 * @Date: 2020-06-11 19:33:13
 * @LastEditTime: 2020-06-11 19:40:11
 * @LastEditors: Please set LastEditors
 * @Description: 全局自定义指令
 * @FilePath: \lianjiu-uic:\Users\ASUS\Desktop\vue-template-vant\src\directive\index.js
 */
import Vue from 'vue'
import {
  checkJurisdiction
} from '../common/jurisdiction'

// 优雅操作 - VUE自定义指令
  Vue.directive('per', {
  inserted(el, binding) {
    // inserted → 元素插入的时候

    let permission = binding.value // 获取到 v-permission的值

    if (permission) {
      let hasPermission = checkJurisdiction(permission)
      if (!hasPermission) {
        // 没有权限 移除Dom元素
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error('需要传key')
    }
  }
})
