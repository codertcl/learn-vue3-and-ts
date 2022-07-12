import {createStore} from "vuex"
import {DECREMENT_N, INCREMENT_N} from './mutation-types'
import axios from "axios";

const store = createStore({
    state() {
        return {
            count: 0,
            name: '冰冰',
            age: 18,
            height: 165,
            books: [
                {name: 'Javascript', price: 50, count: 3},
                {name: 'Java', price: 30, count: 2},
                {name: 'Python', price: 30, count: 2},
                {name: 'Node', price: 40, count: 1},
            ],
            discount: 0.8,
            banners: []
        }
    },
    getters: {
        totalPrice(state) {
            return state.books.reduce((prev, cur) => {
                return prev + cur.price * cur.count
            }, 0)
        },
        currentDiscount(state) {
            return state.discount * 0.9
        },
        totalPriceCountGreaterN(state, getters) {
            // return state.books.reduce((prev, cur) => {
            //     return prev + cur.price * cur.count
            // }, 0)*getters.currentDiscount
            //接受getters调用时传递的参数 (getters本身不接受参数 返回接受参数的函数)
            return (n) => {
                let price = 0
                for (let book of state.books) {
                    if (book.count > n)
                        price += book.price * book.count
                }
                return (price * getters.currentDiscount).toFixed(2)
            }
        },
        nameInfo(state) {
            return `name: ${state.name}`
        },
        ageInfo(state) {
            return `age: ${state.age}`
        },
        heightInfo(state) {
            return `height: ${state.height}`
        }
    },
    mutations: {
        //必须传入state
        decrement(state) {
            state.count--
        },
        increment(state, payload) {
            state.count += payload?.count ? payload.count : 1
        },
        [DECREMENT_N](state, payload) {
            console.log(payload)
            state.count -= payload
        },
        [INCREMENT_N](state, payload) {
            console.log(payload)
            state.count += payload.count
        },
        addBannerData(state, payload) {
            state.banners = payload
        }
    },
    actions: {
        //1:action函数接受参数
        incrementAction(context, payload) {
            setTimeout(() => {
                //接受的参数传递为mutation函数
                context.commit('increment', payload)
            }, 1000)
        },
        //2:context包含的属性
        decrementAction({commit, dispatch, state, rootState, getters, rootGetters}) {
            //还可以再dispatch其他actions函数
            //rootState和rootGetters在没有分模块时state getters一致
            setTimeout(() => {
                commit('decrement')
            }, 1000)
        },
        getHomeData(context) {
            //返回一个Promise对象 将结果返回给组件中的调用处,便于知道请求何时结束,有何结果
            return new Promise((resolve, reject) => {
                axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
                    context.commit("addBannerData", res.data.data.banner.list)
                    resolve({name: "coderwhy", age: 18})
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
})
export default store
