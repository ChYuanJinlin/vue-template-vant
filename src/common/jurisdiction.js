/*
 * @Author: your name
 * @Date: 2020-06-11 19:29:52
 * @LastEditTime: 2020-06-11 19:40:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lianjiu-uic:\Users\ASUS\Desktop\vue-template-vant\src\common\jurisdiction.js
 */

/**
 * @description: 用于存放与权限相关的全局函数/变量
 * @param   checkJurisdiction([key])    key 饱含权限的值
 * @return: Boolean
 */

export function checkJurisdiction(key) {
  // 权限数组
  let jurisdictionList = [1, 2, 3, 5]
  let index = jurisdictionList.indexOf(key)
  console.log('index:', index)
  if (index > -1) {
    // 有权限
    return true
  } else {
    // 无权限
    return false
  }
}
