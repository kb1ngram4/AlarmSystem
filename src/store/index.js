import Vue from "vue";
import Vuex from "vuex";
// 引入模块
import userStore from "./modules/user"

Vue.use(Vuex);
export default new Vuex.Store({
  modules:{
    userStore
  }
})
