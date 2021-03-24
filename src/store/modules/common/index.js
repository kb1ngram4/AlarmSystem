import * as types from "./types";
import actions from "./actions"
const state = {
  collapsed: false,
}
const mutations = {
  [types.SETSCALEBTNSTATE](state){
    state.collapsed = !state.collapsed
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}