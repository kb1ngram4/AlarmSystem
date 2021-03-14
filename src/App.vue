<template>
  <div id="app">
      <menu-list></menu-list>
      <div class="right_app">
        <router-view/>
      </div>
  </div>
</template>
<script>
import menuList from './components/menu/menuList.vue'
export default {
  components: { menuList },
  name:"app",
  methods:{
    scale(){
      
    }
  }

}
</script>
<style lang="stylus" scoped>
#app
  width 100%
  height 100%
  background red
  display flex
.right_app
  // width 
  a = 226px
  width 'calc(100% - 226px)'%a
  background grey
</style>
