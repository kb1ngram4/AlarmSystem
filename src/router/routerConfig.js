import Home from '../views/Home.vue'
export const routesList = [
  {
    path:"/login",
    name:"login",
    title:"登录",
    hide:true,
    component: ()=>("../views/login/login.vue")
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    title:"首页"
  },
  
  {
    path:"/systemManagement",
    name:"system",
    icon:"el-icon-setting",
    title:"系统管理",
    // component: () => import ("../views/systemManagement/equipManagement/index.vue")
    children:[
      {
        path:"/equipManagement",
        name:"equip",
        title:"设备管理",
        component: () => import ("../views/systemManagement/equipManagement/index.vue")
      }
    ]
  }
]