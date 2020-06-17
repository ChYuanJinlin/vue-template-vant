/*
 * @Author: your name
 * @Date: 2020-06-02 16:14:28
 * @LastEditTime: 2020-06-11 19:09:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lianjiu-uic:\Users\ASUS\Desktop\vue-template-vant\src\router\index.js
 */
// 总路由管理文件 index.js 写法
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routerList = [] // 路由数组 - 存放所有路由
function importAll(routerArr) {
  // 该函数用于将所有分区路由中的路由添加到路由数组
  routerArr.keys().forEach(key => {
    console.log(key)
    routerList.push(routerArr(key).default)
  })
}
importAll(require.context('.', true, /\.routes\.js/))
console.log(routerList)
const routes = [
  ...routerList
]

const router = new VueRouter({
  routes
})

export default router
