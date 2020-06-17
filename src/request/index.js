/*
 * @Author: your name
 * @Date: 2020-03-01 17:20:01
 * @LastEditTime: 2020-04-13 14:21:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \democ:\Users\Administrator\Desktop\vue-blog\src\request\index.js
 */
import ajax from './axios'
// 统一暴露
export default {
    // 获取轮播图
     /**
         * @param ajax(url,data[,loading],method='get')
         */
    getBanner(typeid, menuid, loc) {
        return ajax('banner_imgs/list', { typeid, menuid, loc },'post')
    },
    gethotlist(page, limit) {
        return ajax('news/hotlist', { page, limit })
    }
}


