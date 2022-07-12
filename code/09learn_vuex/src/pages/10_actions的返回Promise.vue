<template>
</template>
<script>
    import {useStore} from "vuex";
    import {onMounted} from 'vue'

    export default {
        name: "10_actions的返回Promise",
        setup() {
            const store = useStore()

            onMounted(() => {
                const promise = store.dispatch("getHomeData")
                promise.then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
            })
            return {}
        }
    }
</script>
