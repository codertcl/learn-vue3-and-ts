<template>
    <div>
        <template v-for="(item,index) in names" key="item">
            <!--slot上添加的属性在父组件中可以访问-->
            <slot :item="item" :index="index"> {{item}}</slot>
            <slot name="why"></slot>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            names: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style scoped>

</style>
