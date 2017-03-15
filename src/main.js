// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './js/store'

//路由导入
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//请求数据
import VueResource from "vue-resource"
Vue.use(VueResource)

//全局ajax
import {ajax} from 'js/ajax'
Vue.use(ajax);

//用户方法
import common from 'js/common'
window.com = common;

//验证
import validate from 'js/validate'
Vue.use(validate)

//事件
import touch from 'js/touch'
Vue.use(touch)

//组件全局化
import allComponents from 'js/overall'
Vue.use(allComponents)

//全局组件
import all from 'js/com-component'
Vue.use(all)

//页面
import Login from './components/login.vue'
import Index from './components/index.vue'

import Menu1 from 'components/menu1/menu1-index.vue'
import Menu2 from 'components/menu2/menu2-index.vue'
import Menu3 from 'components/menu3/menu3-index.vue'
import Menu4 from 'components/menu4/menu4-index.vue'
import Menu5 from 'components/menu5/menu5-index.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path:'/',
      //component:Index,
      redirect: '/index/menu1'
    },
    {
      path:'/login',
      component:Login,
    },
    {
      path:'/index',
      component:Index,
      children: [
        {
          path: 'menu1',
          component:Menu1
        },
        {
          path: 'menu2',
          component:Menu2
        },
        {
          path: 'menu3',
          component:Menu3
        },
        {
          path: 'menu4',
          component:Menu4
        },
        {
          path: 'menu5',
          component:Menu5
        }
      ]
    }
    /*{
     path:'',
     component:
     children: [
       {
       path: '',
       //component: sysAdd
       }
     ]
     },*/
    /*{
     path: '/two',
     template: '<App/>',
     component: resolve => {
     require(['./components/demo'], resolve);
     }
     }*/
  ]

});


router.beforeEach(function (to, from, next) {

  var loginToken = '123';

  if(loginToken){

    next()

  }else{

    if(to.path  != '/login'){

      next({ path: '/login' })
    }
    next();
  }

})


/* eslint-disable no-new */
new Vue({
/*  el: '#app',
  template: '<App/>',
  components: { App },*/

  el: '#app',

  router: router,

  render: h => h(App),

  created:function(){
    ///index/agency/waitback
    router.push('/index/menu1')
  },
  mounted:function(){

  },
  store:store
})
