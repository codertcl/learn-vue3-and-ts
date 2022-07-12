<template>
    <div>
        <h4>APP:{{$store.state.count}}</h4>
        <button @click="increment">+1</button>
        <button @click="addN(10)">+10</button>
        <button @click="decrement">-1</button>
        <button @click="subN(10)">-10</button>
    </div>
</template>

<script>
    import {useStore} from 'vuex'
import {INCREMENT_N,DECREMENT_N} from '../store/mutation-types'
    export default {
        name: "06_mutation的细节补充",
        //下方setup中函数覆盖上面的methods方法(谁在后面谁生效)
        setup() {
            const store = useStore()

            function decrement() {
                store.commit('decrement')
            }

            function increment() {
                store.commit('decrement')
            }

            function addN(count) {
                //mutation处理函数中payload为对象
                store.commit({
                    type: INCREMENT_N,
                    count
                })
            }

            function subN(count) {
                //mutation处理函数中payload为数字count
                store.commit(DECREMENT_N, count)
            }

            return {
                decrement,
                increment,
                subN,
                addN
            }
        },
    }
</script>
