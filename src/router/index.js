import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect:'/login',
      component:()=>import('../components/Home.vue')
    },
    {
      path: "/login",
      name:'login',
      component:()=>import('../components/Login.vue')
    },
    {
      path: "/home",
      // component:Home
      // component:()=>import('../components/Home.vue')
      component: (resolve) => require(["../components/Home.vue"], resolve),
    },
    {
      path: "*",
      name:"NotFound",
      component:()=>import('../components/NotFound.vue')
    },
  ],
  mode: "history",
});