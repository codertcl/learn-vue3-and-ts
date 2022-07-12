<template>
    <div>
        <suspense>
            <template #default>
                <async-category></async-category>
            </template>
            <template #fallback>
                <loading/>
            </template>

        </suspense>
    </div>
</template>

<script>
    import {defineAsyncComponent} from 'vue'
    import Home from "./Home";

    //类型一:工厂函数，该工厂函数需要返回一个Promise对象；
    const AsyncCategory = defineAsyncComponent(() => import("./AsyncCategory"))

    //类型二:接受一个对象类型，对异步函数进行配置；
    // const AsyncCategory = defineAsyncComponent({
    //     loader: import("./AsyncCategory"),
    //     loadingComponent: Loading,//加载过程中显示的组件
    //     errorComponent: Error,//加载失败显示的组件
    //     // 在显示loadingComponent组件之前, 等待多长时间
    //     delay: 2000,
    //     // 如果提供了·timeout:，并且加载组件的时间超过了设定值，将显示错误组件//·默认值:Infinity(即永不超时，单位·ms)
    //     timeout: 3000,
    //     // 定义组件是否可挂起|默认值:true
    //     //suspensible:false时 让组件始终控制自己的加载状态
    //     suspensible: true,
    //     /**
    //      *
    //      * @param {*} error 错误信息对象
    //      * @param {*} retry 一个函数，用于指示当 promise 加载器 reject 时，加载器是否应该重试
    //      * @param {*} fail  一个函数，指示加载程序结束退出
    //      * @param {*} attempts 允许的最大重试次数
    //      */
    //     onError(error, retry, fail, attempts) {
    //         if (error.message.match(/fetch/) && attempts <= 3) {
    //             // 请求发生错误时重试，最多可尝试 3 次
    //             retry()
    //         } else {
    //             // 注意，retry/fail 就像 promise 的 resolve/reject 一样：
    //             // 必须调用其中一个才能继续错误处理。
    //             fail()
    //         }
    //     }
    // })
    export default {
        name: "App",
        components: {
            Home,
            AsyncCategory
        }
    }
</script>

<style scoped>

</style>
