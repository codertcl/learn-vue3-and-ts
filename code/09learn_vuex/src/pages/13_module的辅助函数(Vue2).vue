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

    const {mapMutations, mapActions, mapGetters, mapState} = createNamespacedHelpers('home')
    export default {
        name: "13_module的辅助函数",
        computed: {
            // 1.写法一:
            // ...mapState({
            //     homeCount: state => state.home.homeCount
            // }),
            // ...mapGetters({
            //     doubleHomeCount: "home/doubleHomeCount"
            // })

            // 2.写法二:
            // ...mapState("home", ["homeCount"]),
            // ...mapGetters("home", ["doubleHomeCount"])

            // // 3.写法三:
            ...mapState(["homeCount"]),
            ...mapGetters(["doubleHomeCount"])
        },
        methods: {
            // 1.写法一:
            // ...mapMutations({
            //     increment: "home/increment"
            // }),
            // ...mapActions({
            //     incrementAction: "home/incrementAction"
            // }),

            // 2.写法二:
            //     ...mapMutations('home', ["increment"]),
            //     ...mapActions("home", ["incrementAction"])'

            // // 3.写法三:
            ...mapMutations("increment"),
            ...mapActions("incrementAction")
        },
    }
</script>

<style scoped>

</style>
