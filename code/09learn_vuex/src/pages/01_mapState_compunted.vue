<template>
    <div>
        <h4>Home:{{$store.state.count}}</h4>
        <h4>count:{{count}}</h4>
        <h4>localCount:{{localCount}}</h4>
        <h4>求和:{{countPlusLocalState}}</h4>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Home",
        data() {
            return {
                localCount: 1
            }
        },
        //计算属性获取state中变量
        computed: {
            count() {
                return this.$store.state.count
            }, ...mapState({
                // 箭头函数可使代码更简练
                // count: state => state.count,

                // 传字符串参数 'count' 等同于 `state => state.count`
                count: 'count',

                // 为了能够使用 `this` 获取局部状态，必须使用常规函数
                countPlusLocalState(state) {
                    return state.count + this.localCount
                },
                // 当映射的计算属性的名称与 state 的子节点名称相同时
                // 也可以给 mapState 传一个字符串数组。
            }), ...mapState(['count'])
        }
    }
</script>
