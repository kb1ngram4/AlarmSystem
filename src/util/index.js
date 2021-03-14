import {
  Loading
} from "element-ui"
export class LoadingObj {
  constructor(){
    this.loading = ""
  }
  static startLoading() {
    return Loading.service({
      lock: true,
      text: "拼命加载中...",
      background: 'rgba(0,0,0,.7)',
    })
  }
  static endLoading(){
    this.startLoading().close()
    
  }
}