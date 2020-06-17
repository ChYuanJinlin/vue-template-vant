<!--
 * @Author: your name
 * @Date: 2020-06-02 16:14:28
 * @LastEditTime: 2020-06-11 19:37:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lianjiu-uic:\Users\ASUS\Desktop\vue-template-vant\src\App.vue
--> 
<template>
  <div id="app">
    <test/>
    <van-number-keyboard safe-area-inset-bottom />
    <img src="./assets/logo.png" />
    <br />
    <van-button @click="handle" type="info">{{$t('message.title')}}</van-button>
    <p>vuex示例-当前值{{count}}</p>
    <van-button type="info" @click="add" v-per="5" >+</van-button>
    <van-button type="info" @click="js" v-per="10" >-</van-button>
    <van-calendar v-model="show" />
    <router-view />
  </div>
</template>

<script>
import { Locals } from "./lang/vantLocal";
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      date: "",
      show: true
    };
  },
  computed: {
    ...mapState(["count"])
  },
  mounted() {
    Locals();
  },
  methods: {
    handle() {
      if (localStorage.getItem("lang") == "zh") {
        localStorage.setItem("lang", "en");
        this.$i18n.locale = "en";
        Locals("en");
      } else {
        localStorage.setItem("lang", "zh");
        this.$i18n.locale = "zh";
        Locals("zh");
      }
      this.show = true;
    },
     ...mapActions(['add','js']),
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
