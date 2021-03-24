export class Public {
  constructor(){

  }
  /**
   * 
   * @param {路由数组} list 
   * @returns 扁平化数组
   */
  static genRouter(list){
    let routesArr = [];
    list.map((item)=>{
      let obj = {...item};
      console.log(obj);
      delete obj.children
      routesArr.push(obj);
      if(item.children){
        routesArr.push(...item.children)
      }
    });
    console.log(routesArr);
    return routesArr
  }
}