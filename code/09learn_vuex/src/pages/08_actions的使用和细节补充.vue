<template>
    <div>
        <h4>Home:{{$store.state.count}}</h4>
        <button @click="increment">异步+2</button>
        <button @click="add">同步+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>

<script>
    export default {
        name: "08_actions的使用和细节补充",
        methods: {
            increment() {
                // this.$store.dispatch('incrementAction', {count:2})
                this.$store.dispatch({
                    type: 'incrementAction',
                    count: 2
                })
            },
            add() {
                this.$store.commit('increment')
            },
            decrement() {
                this.$store.dispatch('decrementAction', {count: 2})
            }
        },
        mounted() {
            // axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
            //     console.log(res.data.data.banner.list)
            // })
            this.$store.dispatch('getHomeData')
        },
        setup() {

        }
    }
</script>
