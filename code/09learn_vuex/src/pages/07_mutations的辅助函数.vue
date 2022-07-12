<template>
    <div>
        <h4>APP:{{$store.state.count}}</h4>
        <button @click="increment">+1</button>
        <!-- 由于addN映射的mutation函数INCREMENT_N 参数为对象-->
        <button @click="increment_n({count:10})">+10</button>
        <button @click="decrement">-1</button>
        <button @click="decrement_n(10)">-10</button>
        <hr>
        <button @click="add">+1</button>
        <!-- 由于addN映射的mutation函数INCREMENT_N 参数为对象-->
        <button @click="addN({count:10})">+10</button>
        <button @click="sub">-1</button>
        <button @click="subN(10)">-10</button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import {DECREMENT_N, INCREMENT_N} from "@/store/mutation-types";

    export default {
        name: "07_mutations的辅助函数",
        methods: {
            // ...mapMutations(["increment", "decrement", INCREMENT_N]),
            // ...mapMutations({
            //     add: "increment"
            // })
        },
        setup() {
            const storeMutations = mapMutations(['decrement', 'increment', INCREMENT_N, DECREMENT_N])
            const storeMutations2 = mapMutations({
                //将 `this.add()` 映射为 `this.$store.commit('increment')`
                add: 'increment',
                sub: 'decrement',
                addN: INCREMENT_N,
                subN: DECREMENT_N,
            })
            return {
                ...storeMutations,
                ...storeMutations2,
            }
        }
    }
</script>
