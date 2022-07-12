<template>
    <div>
    </div>
</template>

<script>
    import emitter from "./utils/eventbus";
    import {aboutEvent} from "./utils/constants";

    export default {
        name: 'HomeContent',
        data() {
            return {
                unwatch: null,
            }
        },
        created() {
            emitter.on(aboutEvent, info => {
                console.log(info)
            })
        },

        beforeUnmount() {
            //取消所有
            emitter.all.clear()
            //取消单个事件监听
            emitter.off('unwatch', info => {
                console.log(info)
            })
        },
        methods: {}
    }
</script>

<style scoped>

</style>
