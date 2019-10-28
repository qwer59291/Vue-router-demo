import Vue from 'vue'
import VueRouter from 'vue-router'

import User from 'components/demo1/main/user.vue'
import Bar from 'components/demo1/children/bar.vue'
import Foo from 'components/demo1/children/foo.vue'
Vue.use(VueRouter)


const router = new VueRouter({
  routes: [{
    path: '/user/:id',
    name:'user',
    component: User,
    children: [{
      path: 'bar/:mId',
      component: Bar
    }, {
      path: 'foo/:mId',
      component: Foo
    }, ]
  }]
})

export default router