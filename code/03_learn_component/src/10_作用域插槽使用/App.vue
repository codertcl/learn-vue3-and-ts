<template>
    <div>
        <show-names :names="names">
            <!--slotProps获取到子组件slot中绑定的属性-->
            <template v-slot="slotProps">
                <button>{{slotProps.item}}-{{slotProps.index}}</button>
            </template>
        </show-names>

        <!-- 注意: 如果还有其他的具名插槽, 那么默认插槽也必须使用template来编写 -->
        <show-names :names="names">
            <template v-slot="coderwhy">
                <button>{{coderwhy.item}}-{{coderwhy.index}}</button>
            </template>

            <template v-slot:why>
                <h2>我是why的插入内容</h2>
            </template>
        </show-names>
    </div>
</template>

<script>
    // import ChildCpn from './About.vue';
    import ShowNames from './ShowNames.vue';

    export default {
        components: {
            // ChildCpn,
            ShowNames
        },
        data() {
            return {
                names: ["why", "kobe", "james", "curry"]
            }
        }
    }
</script>

<style scoped>

</style>
