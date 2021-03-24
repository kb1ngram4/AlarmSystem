import Vue from "vue";
import VueRouter from "vue-router"
import {routesList} from "./routerConfig"
import { Public } from "../util/public"
Vue.use(VueRouter)
const routes = Public.genRouter(routesList)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
