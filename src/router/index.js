import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/home",
      // component:Home
      // component:()=>import('@/components/Home.vue')
      component: (resolve) => require(["@/components/Home.vue"],resolve),
    },
  ],
  mode: "history",
});