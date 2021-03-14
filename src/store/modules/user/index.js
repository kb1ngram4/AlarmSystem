import * as types from "./types";
import actions from "./actions";

const state ={
  login:[]
}
const mutations = {
  [types.LOGIN](state,obj){
    console.log(obj);
  }
}

export default{
  namespaced:true,
  state,
  mutations,
  actions,
  types
}