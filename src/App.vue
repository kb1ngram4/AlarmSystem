<template>
  <div id="app">
      <menu-list></menu-list>
      <div class="right_app">
        <div class="mainHeader"></div>
        <router-view/>
      </div>
  </div>
</template>
<script>
import menuList from './components/menu/menuList.vue'
export default {
  components: { menuList },
  name:"app",
  mounted(){
    this.initData()
  },
  watch:{
    $route(to){
      let userToken = sessionStorage.getItem("userToken")
      if(userToken){
        this.isLoggedIn = true;
      }else{
        this.isLoggedIn = false
      }
      this.currentRouter = to.path
      this.isSetRoute(to.path)
    }
  },
  methods:{
    scale(){
      
    },
    initData(){
      let userToken = sessionStorage.getItem("userToken")
      console.log(userToken);
      if(!userToken){
        // console.log(this.$router);
        this.$router.push("/login")
      }
    },
    isSetRoute(path) {
      if (path == "/login" || path == "/register") {
        this.hide = true;
      } else {
        this.hide = false;
      }
    },
  }

}
</script>
<style lang="stylus" scoped>
#app
  width 100%
  height 100%
  background #1a2a52
  display flex
.right_app
  // width 
  a = 226px
  width 'calc(100% - 226px)'%a
  height 100%
  overflow hidden
  background grey
.mainHeader
  width 100%;
  height 50px
  background blue
</style>
