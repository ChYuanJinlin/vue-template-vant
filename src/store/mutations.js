/*
 * @Author: your name
 * @Date: 2020-03-04 12:45:36
 * @LastEditTime: 2020-03-04 16:15:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \democ:\Users\Administrator\Desktop\vue-blog\src\store\mutations.js
 */
import { ADD, JS } from './mutations-types'


export default {

    [ADD] (state) {

        state.count++
    },
    [JS] (state) {
        state.count--
    }


}