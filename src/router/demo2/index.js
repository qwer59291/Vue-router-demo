import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Foo from 'components/demo2/1/children/foo.vue'
import Bar from 'components/demo2/1/children/bar.vue'
import Baz from 'components/demo2/1/children/baz.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      components: {
        default: Foo,
        a: Bar,
        b: Baz
      }
    },
    {
      path: '/other',
      components: {
        default: Baz,
        a: Bar,
        b: Foo
      }
    }
  ]
})
export default router