import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: '/login',
      hidden:true,
      component: () => import('@/components/Home.vue')
    },
    {
      path: "/login",
      name: 'login',
      hidden: true,
      component: () => import('@/components/Login.vue')
    },
    {
      path: "/home",
      name: '學生管理',
      iconClass: 'fa fa-users',
      redirect: '/home/student',
      component: () => import('@/components/Home.vue'),
      children: [
        {
          path: '/home/student',
          name: '學生列表',
          iconClass: 'fa fa-list',
          component: () => import('@/components/students/StudentList'),
        },
        {
          path: '/home/info',
          name: '信息列表',
          iconClass: 'fa fa-list-alt',
          component: () => import('@/components/students/InfoList'),
        },
        {
          path: '/home/infos',
          name: '信息管理',
          iconClass: 'fa fa-list-alt',
          component: () => import('@/components/students/InfoLists'),
        },
        {
          path: '/home/work',
          name: '作業列表',
          iconClass: 'fa fa-list-ul',
          component: () => import('@/components/students/WorkList'),
        },
        {
          path: '/home/works',
          name: '作業管理',
          iconClass: 'fa fa-th-list',
          component: () => import('@/components/students/WorkMent'),
        },
      ]
    },
    {
      path: "/home",
      name: '數據分析',
      iconClass: 'fa fa-bar-chart',
      component: () => import('@/components/Home.vue'),
      children: [
        {
          path: '/home/dataview',
          name: '數據概覽',
          iconClass: 'fa fa-line-chart',
          component: () => import('@/components/dataAnalysis/DataView'),
        },
        {
          path: '/home/mapview',
          name: '地圖概覽',
          iconClass: 'fa fa-line-chart',
          component: () => import('@/components/dataAnalysis/MapView'),
        },
        {
          path: '/home/travel',
          name: '旅遊地圖',
          iconClass: 'fa fa-line-chart',
          component: () => import('@/components/dataAnalysis/TravelMap'),
        },
        {
          path: '/home/score',
          name: '分數地圖',
          iconClass: 'fa fa-line-chart',
          component: () => import('@/components/dataAnalysis/ScoreMap'),
        },
      ]
    },
    {
      path: "/users",
      name: '用戶中心',
      iconClass: 'fa fa-user',
      component: () => import('@/components/Home.vue'),
      children: [
        {
          path: '/users/user',
          name: '權限管理',
          iconClass: 'fa fa-user',
          component: () => import('@/components/users/User'),
        },
      ]
    },
    {
      path: "*",
      name: "NotFound",
      hidden: true,
      component: () => import('@/components/NotFound.vue')
    },
    // {
    //   path: "/home",
    //   // component:Home
    //   // component:()=>import('@/components/Home.vue')
    //   component: (resolve) => require(["@/components/Home.vue"], resolve),
    // },
  ],
  mode: "history",
});