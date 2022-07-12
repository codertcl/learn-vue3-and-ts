<template>
    <h2>冰冰</h2>
    <h2>{{ title }}</h2>
    <hello-world></hello-world>
</template>

<script>
    import HelloWorld from "./HelloWorld.vue";

    export default {
        data() {
            return {
                title: 'hello world',
            }
        },
        components: {
            HelloWorld
        },
        methods: {},
        computed() {

        }
    }
</script>
<style scoped>
    h2 {
        color: red;
    }
</style>
