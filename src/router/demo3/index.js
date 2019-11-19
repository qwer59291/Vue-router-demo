//重定向
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import aaa from 'components/demo3/children/aaa.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/a',
    name: 'aaa',
    component: aaa,
    alias:'/c'  //别名
  }, {
    path: '/b',
    redirect: { name: 'aaa' } //重定向
  }]
})

export default router