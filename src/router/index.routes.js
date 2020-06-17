/*
 * @Author: your name
 * @Date: 2020-06-11 18:59:57
 * @LastEditTime: 2020-06-11 19:04:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lianjiu-uic:\Users\ASUS\Desktop\vue-template-vant\src\router\login.js
 */
export default {
  path: '/index',
  name: 'Index',
  component: () => import('../views/index.vue'), // 懒加载式引入，当跳转到时才进行引入chunk
  children: []
}
