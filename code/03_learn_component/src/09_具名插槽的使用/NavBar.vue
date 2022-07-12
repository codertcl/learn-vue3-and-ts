<template>
    <div class="nav-bar">
        <!-- 默认插槽,父组件中没有名字的元素会替换到这里来-->
        <!-- <slot name="default"></slot> -->
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
        <div class="addition">
            <slot :name="name"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        //name动态传入
        props: {
            name: String
        },
        // data() {
        //   return {
        //     name: "why"
        //   }
        // }
    }
</script>

<style scoped>
    .nav-bar {
        display: flex;
    }

    .left, .right, .center {
        height: 44px;
    }

    .left, .right, .addition {
        width: 80px;
        background-color: red;
    }

    .center {
        flex: 1;
        background-color: blue;
    }
</style>
