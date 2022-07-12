//ES Module
import {sum} from './js/math.js'
import './js/element.js'
////默认是vue.runtime.esm-bundler.js；
import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './vue/App.vue'
// commonjs
const {priceForamt} = require('./js/format.js')

console.log(sum(1, 2))
console.log(priceForamt())

// const app = createApp({
//     template: "#my-app",
//     data() {
//         return {
//             title: 'hello world',
//         }
//     }
// })

// 使用SFC单文件组件
const app=createApp(App)

app.mount('#app')
