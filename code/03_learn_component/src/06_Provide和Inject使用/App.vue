<template>
    <div>
        <home/>
        <button @click="addName">+name</button>
    </div>
</template>

<script>
    import Home from './Home.vue';
    import {computed} from 'vue'
    //script作用域中的this为undefined
    // console.log(this)
    export default {
        components: {
            Home
        },
        //需要使用this对象时,写成函数
        provide() {
            console.log(this)
            return {
                name: "why",
                age: 18,
                // length: this.names.length //数据不会实时更新
                //返回ref对象
                length: computed(() => this.names.length) //计算属性
            }
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
