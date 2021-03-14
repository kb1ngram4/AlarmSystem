import {Api } from "../../../api/index"
import * as types from "./types"
import {LoadingObj} from "../../../util"
const actions = {
  async getLogin({commit},data){
    LoadingObj.startLoading()
    let res = await Api.fetchPostNow("/user/login",{
      loginName:data.name,
      password:data.password
    })
    console.log(res);
    if(res.code == 0){
      LoadingObj.endLoading()
      sessionStorage.setItem("userToken",res.data.userToken);
      sessionStorage.setItem("uid",res.data.user_id)
      commit(types.LOGIN,res.data)
    }
    
  }
}

export default actions
