import Vue from "vue";
import App from "./App.vue";
import 'font-awesome/css/font-awesome.min.css'
import router from './router'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import service from '@/utils/service'
import echarts from 'echarts'
Vue.use(ElementUI)
Vue.prototype.service = service
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false;

router.beforeEach((to,from,next)=>{
  if(!localStorage.getItem('username')){
    if(to.path !=='/login'){
      next('/login')
    }else next()
  }next()
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");




