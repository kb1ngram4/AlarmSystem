<template>
  <div class="menu_list">
    <el-menu
      :default-active="currentMenu"
      class="el-menu-vertical-demo"
      background-color="#2f0458"
      text-color="#fff"
      :router="true"
    >
      <template v-for="item in navList">
        <template v-if="!item.hide">
          <el-submenu v-if="item.children" :key="item.path" :index="item.path">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <el-menu-item-group>
              <template v-for="_item in item.children">
                <el-menu-item :key="_item.path" :index="_item.path"
                  >{{ _item.title }}
                </el-menu-item>
              </template>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item v-else :key="item.path" :index="item.path">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
import { routesList } from "../../router/routerConfig";
export default {
  data() {
    return {
      currentMenu: "/",
      navList: routesList,
    };
  },
  watch: {
    routesList(newVal) {
      console.log(newVal);
    },
  },
  mounted() {
    console.log(this.navList);
  },
};
</script>
<style lang="stylus" scoped >
.menu_list {
  // position: relative;
  display: flex;
  flex-direction: column;
  width: 226px;
  height: 100vh;
  background: #2f4058;
  // background #f40
}

.el-menu {
  border-right: none;
  // background none !important
}

.el-menu-vertical-demo {
}
</style>