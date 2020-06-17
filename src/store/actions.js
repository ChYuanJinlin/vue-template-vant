/*
 * @Author: your name
 * @Date: 2020-03-04 12:43:22
 * @LastEditTime: 2020-03-04 14:31:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \democ:\Users\Administrator\Desktop\vue-blog\src\store\actions.js
 */
import { ADD, JS } from './mutations-types'


export default {

    add(ctx) {
        setTimeout(() => {
            ctx.commit(ADD)
        }, 1000);


    },

    js(ctx) {
        ctx.commit(JS)

    },

}