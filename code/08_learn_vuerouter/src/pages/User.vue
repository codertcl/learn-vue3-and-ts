<template>
    <div class="user">
        <h4>{{$route.params.username}}</h4>
        <h4>{{$route.params.id}}</h4>
    </div>
</template>

<script>
    import {useRoute} from 'vue-router'

    export default {
        name: 'User',
        created() {
            console.log(this.$router, this.$route);
        },
        setup() {
            //获取当前路由(this.$route) 返回当前路由地址
            // 相当于在模板中使用 $route,必须在 setup() 中调用。
            const route = useRoute()
            console.log(route)
        }
    }
</script>
