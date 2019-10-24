import Vue from 'vue'
import VueRouter from 'vue-router'

import User from '../components/src/main/user.vue'
import Bar from '../components/src/main/bar.vue'
import Foo from '../components/src/main/foo.vue'
Vue.use(VueRouter)


const router = new VueRouter({
  routes: [{
    path: '/user/:id',
    component: User,
    children: [{
      path: '/bar/:mId',
      component: Bar
    }, {
      path: '/foo/:mId',
      component: Foo
    }, ]
  }]
})

export default router
