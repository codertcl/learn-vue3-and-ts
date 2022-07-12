<template>
    <div id="app">
        <!-- props: href 跳转的链接 -->
        <!-- props: route对象 -->
        <!-- props: navigate导航函数 -->
        <!-- props: isActive 是否当前处于活跃的状态 -->
        <!-- props: isExactActive 是否当前处于精确的活跃状态 -->
        <router-link to="/home" v-slot="props">
            <button @click="props.navigate">{{props.href}}</button>
            <button @click="props.navigate">哈哈哈</button>
            <span :class="{'active': props.isActive}">{{props.isActive}}</span>
            <span :class="{'active': props.isActive}">{{props.isExactActive}}</span>
            <!--<p>{{props.route}}</p>-->
        </router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/category">分类</router-link>
        <router-link to="/login">登录</router-link>
        <!--添加custom属性就不会包裹a-->
        <router-link custom to="/home">
            <strong>首页</strong>
        </router-link>
        <!--渲染为组件-->
        <router-link custom to="/home">
            <nav-bar title="首页"/>
            <button>按钮</button>
        </router-link>
        <router-view v-slot="props">
            <transition name="why">
                <keep-alive>
                    <component :is="props.Component"></component>
                </keep-alive>
            </transition>
        </router-view>
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
    .why-active {
        color: red;
    }

    .why-enter-from,
    .why-leave-to {
        opacity: 0;
    }

    .why-enter-active,
    .why-leave-active {
        transition: opacity 1s ease;
    }

    .router-link-active {
        color: pink;
    }

    .active {
        color: red;
    }

    .router-link-exact-active {
        color: aqua;
    }
</style>
