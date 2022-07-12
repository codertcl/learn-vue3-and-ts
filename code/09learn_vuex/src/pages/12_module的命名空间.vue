<template>
    <div>
        <h2>root:{{ $store.state.rootCount }}</h2>
        <h2>home:{{ $store.state.home.homeCount }}</h2>
        <h2>user:{{ $store.state.user.userCount }}</h2>

        <hr>
        <h2>{{ $store.getters["home/doubleHomeCount"] }}</h2>
        <button @click="homeIncrement">home同步+1</button>
        <button @click="homeIncrementAction">home异步+1</button>
    </div>
</template>
<script>
    import {useStore} from 'vuex'

    export default {
        setup() {
            const store = useStore()

            function homeIncrement() {
                store.commit("home/increment")
            }

            function homeIncrementAction() {
                store.dispatch("home/incrementAction")
            }

            return {
                homeIncrement, homeIncrementAction
            }
        }
    }
</script>
