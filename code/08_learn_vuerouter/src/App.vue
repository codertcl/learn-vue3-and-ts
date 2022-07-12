<template>
    <div id="app">
        <router-link to="/home"></router-link>
        <router-link :to="{path:'/home'}" active-class="active">首页2</router-link>
        <!-- 带查询参数，下面的结果为 /home?plan=private -->
        <router-link :to="{ path: '/home', query: { plan: 'private' }}">home4</router-link>
        <br>
        <router-link to="/about">关于</router-link>
        <button @click="$router.push('/about')">关于</button>
        <button @click="jumpToAbout">关于2</button>
        <br>
        <router-link to="/user/冰冰/id/1">用户1</router-link>
        <!--query参数拼接在路径后  params显示在路径中，即动态路由中的参数-->
        <router-link :to="{ path: '/user/饼饼/id/1', query: { name: '冰冰',age:18 }}">用户2</router-link>
        <router-view/>
    </div>
</template>

<script>
    import {useRouter} from "vue-router";
    import NavBar from "@/components/NavBar";

    export default {
        name: 'App',
        methods: {
            // jumpToAbout() {
            //     this.$router.push('/about')
            // }
        },
        components: {
            NavBar
        },
        setup() {
            let router = useRouter()

            const jumpToAbout = () => {
                // router.push('/about')
                router.push({
                    path: '/about',
                    query: {name: '冰冰', age: 18}
                })
            }

            return {
                jumpToAbout
            }
        }
    }
</script>

<style scoped>
    .router-link-active {
        color: yellow;
    }

    .active {
        color: red;
    }
</style>
