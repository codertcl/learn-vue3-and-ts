<template>
    <div>
        <!--input上v-model使用及其本质-->
        <!-- <input v-model="message">
        <input :value="message" @input="message = $event.target.value"> -->

        <!--        &lt;!&ndash; 组件上使用v-model $event为子组件传递的参数&ndash;&gt;-->
        <!--        <hy-input2 v-model="message"></hy-input2>-->
        <!--        <hy-input2 :modelValue="message" @update:model-value="message = $event"></hy-input2>-->

        <!-- <hy-input @update:title="title=$event" @update:message="message=$event"/>-->

        <!-- 绑定多个属性 -->
        <!-- v-model:title="title" 相当于做了两件事：绑定了title属性；监听了@update:title的事件；-->
        <hy-input v-model="message" v-model:title="title"></hy-input>

        <h2>{{message}}</h2>
        <h2>{{title}}</h2>
    </div>
</template>

<script>
    import HyInput from './HyInput.vue';
    import HyInput2 from './HyInput2.vue';

    export default {
        components: {
            HyInput,
            HyInput2,
        },
        data() {
            return {
                message: "Hello World",
                title: "哈哈哈"
            }
        }
    }
</script>

<style scoped>

</style>
