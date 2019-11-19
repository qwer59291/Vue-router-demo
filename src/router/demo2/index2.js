import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import UserSettings from 'components/demo2/2/children/user-settings.vue'
import UserEmail from 'components/demo2/2/children/user-email.vue'
import UserProfile from 'components/demo2/2/children/user-profile.vue'
import UserProfilePreview from 'components/demo2/2/children/user-profile-preview.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/settings',
    // You could also have named views at tho top
    component: UserSettings,
    children: [{
      path: 'emails',
      component: UserEmail
    }, {
      path: 'profile',
      components: {
        default: UserProfile,
        helper: UserProfilePreview
      }
    }]
  }]
})

router.push('/settings/emails')

export default router



// const router = new VueRouter({
//   mode: 'history',
//   routes: [
//     { path: '/settings',
//       // You could also have named views at tho top
//       component: UserSettings,
//       children: [{
//       	path: 'emails',
//         component: UserEmailsSubscriptions
//       }, {
//       	path: 'profile',
//         components: {
//         	default: UserProfile,
//           helper: UserProfilePreview
//         }
//       }]
//     }
//   ]
// })

// router.push('/settings/emails')

// new Vue({
// 	router,
//   el: '#app'
// })
