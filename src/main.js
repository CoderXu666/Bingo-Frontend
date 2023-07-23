import Vue from 'vue'

import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import '@/styles/index.scss'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont'
import App from './App'
import router from './router'

if (process.env.NODE_ENV === 'production') {
}

Vue.use(ElementUI, {locale})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
