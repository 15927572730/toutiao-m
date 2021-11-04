import Vue from 'vue'
import App from './App.vue'

//加载Vant核心组件库
import Vant from 'vant'

//加载Vant全局样式
import 'vant/lib/index.css'

// 加载全局样式
import './styles/index.less'

// 加载动态设置 REM基准值
import 'amfe-flexible'

import router from './router/index.js'


//注册使用vant组件库
Vue.use(Vant);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
