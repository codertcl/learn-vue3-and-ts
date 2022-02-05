import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
// 这个样式不引入也可以？
// import 'element-plus/lib/theme-chalk/index.css'
import router from './router'
import { setupRouterGuard } from '/@/router/guard/index'
import store, { setupStore } from './store'
import { setupGlobalProperties } from './global'
import App from './App.vue'
import './assets/css/index.less'
import 'animate.css'
const app = createApp(App)

app.use(router)
app.use(store)
// setup store
setupStore()
// setup router guard
setupRouterGuard()
// 全局注册
setupGlobalProperties(app)

app.use(ElementPlus, { locale })
app.mount('#app')
