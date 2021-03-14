// import Vue from "vue";
// import axios from "axios";
// import { reject, resolve } from "core-js/fn/promise";
import router from "../router";
import axios from "./interceptors"
let baseUrl = "/api"
class Api {
  fetchGet() {
    console.log(1111);
  }
  static fetchPostNow(url, params) {
    console.log("params", params);
    return new Promise((resolve, reject) => {
      axios.post(baseUrl + url, params)
        .then(res => {
          if (res.data.message && res.data.message == "token已经失效，请重新登录") {
            if (router.currentRoute.path !== "/login") {
              sessionStorage.clear();
              router.push("/login");
            }
          }
          resolve(res)
        }).catch(err => {
          reject(err)
        })
    })
  }
  // formData请求
  static fetchFormData(url, data) {
    let formData = new FormData();
    for (const key in data) {
      if (data.hasOwnProperty.call(data, key)) {
        const element = data[key];
        formData.append(key,element)
      }
    }
    return new Promise((resolve, reject) => {
      axios.post(baseUrl + url, formData)
        .then(res=>{
          resolve(res)
        })
        .catch(err=>{
          reject(err)
        })
    })
  }
}
// export default Api;
export {
  Api
}