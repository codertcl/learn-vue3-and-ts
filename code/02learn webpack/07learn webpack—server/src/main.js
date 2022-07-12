//ES Module
import {sum} from './js/math.js'
////默认是vue.runtime.esm-bundler.js；
import {createApp} from 'vue/dist/vue.esm-bundler'
import App from './vue/App.vue'
import axios from 'axios'
import './js/element.js'
// commonjs
const {priceForamt} = require('./js/format.js')

//上面的引入方式没有指定哪个模块进行热替换
if (module.hot) {
    console.log(113241)
    //指定某个模块进行热替换
    module.hot.accept("./js/element.js", () => {
        console.log('更新')
    })
}

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
const app = createApp(App)

app.mount('#app')


axios.post('/api/login', {
    username: 'z',
    password: 111
}).then(res => {
    console.log(res)
}).catch(err => {
    console.log(111111)
    console.log(err)
})
