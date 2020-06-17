/*
 * @Author: your name
 * @Date: 2020-03-04 11:54:11
 * @LastEditTime: 2020-03-04 12:47:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \democ:\Users\Administrator\Desktop\vue-blog\src\store\index.js.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations

});



export default store