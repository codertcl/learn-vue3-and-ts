<template>
    <div>
        <hr>
        <h2>root:{{ rootCount }}</h2>
        <h2>homeCount:{{ homeCount }}</h2>
        <h2>doubleHomeCount:{{ doubleHomeCount }}</h2>
        <!-- <h2>{{ doubleRootCount }}</h2> -->
        <button @click="increment">home+1</button>
        <button @click="incrementAction">home+1</button>
        <hr>
    </div>
</template>

<script>
    // 生成一个模块的辅助函数
    import {createNamespacedHelpers} from "vuex";
    import {useGetters, useState} from '../hooks/index'

    const {mapMutations, mapActions, mapGetters, mapState} = createNamespacedHelpers('home')
    export default {
        name: "13_module的辅助函数",
        setup() {
            // const state = mapState['homeCount'] //undefined
            // const getters = mapGetters['doubleHomeCount'] //undefined
            //useState['homeCount'] useGetters['doubleHomeCount']取到的是根里的数据
            //只传一个参数 即获取根中的数据
            const rootState = useState(['rootCount'])
            const state = useState('home',['homeCount'])
            const getters = useGetters('home',['doubleHomeCount'])
            const mutations = mapMutations(["increment"])
            const actions = mapActions(["incrementAction"])
            return {
                ...state, ...getters, ...mutations, ...actions,...rootState
            }
        }
    }
</script>

<style scoped>

</style>
