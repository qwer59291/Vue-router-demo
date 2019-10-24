import Vue from 'vue'
import App from './App.vue'

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')