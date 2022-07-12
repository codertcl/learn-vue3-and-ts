<template>
    <div>
        <Home/>
        <About/>
        <button @click="addName">+name</button>
    </div>
</template>

<script>
    import Home from './Home.vue';
    import About from "./About";

    export default {
        components: {
            Home,
            About
        },
        data() {
            return {
                names: ["abc", "cba", "nba"]
            }
        },
        methods: {
            addName() {
                this.names.push("why");
                console.log(this.names);
            }
        }
    }
</script>

<style scoped>

</style>
