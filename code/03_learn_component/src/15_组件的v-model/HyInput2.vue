<!--<template>-->
<!--  <div>-->
<!--    &lt;!&ndash; 1.默认绑定和事件处理 &ndash;&gt;-->
<!--    &lt;!&ndash; <button @click="btnClick">hyinput按钮</button>-->
<!--    <h2>HyInput的message: {{modelValue}}</h2> &ndash;&gt;-->

<!--    &lt;!&ndash; 2.通过input &ndash;&gt;-->
<!--    &lt;!&ndash; <input :value="modelValue" @input="btnClick"> &ndash;&gt;-->

<!--    &lt;!&ndash; 3.绑定到props中是不对的 &ndash;&gt;-->
<!--    &lt;!&ndash; <input v-model="modelValue"> &ndash;&gt;-->

<!--    &lt;!&ndash; 4. &ndash;&gt;-->
<!--    <input v-model="value">-->

<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--  export default {-->
<!--    props: {-->
<!--      modelValue: String-->
<!--    },-->
<!--    emits: ["update:modelValue"],-->
<!--    computed: {-->
<!--      value: {-->
<!--        set(value) {-->
<!--          this.$emit("update:modelValue", value);-->
<!--        },-->
<!--        get() {-->
<!--          return this.modelValue;-->
<!--        }-->
<!--      }-->
<!--    },-->
<!--    methods: {-->
<!--      btnClick(event) {-->
<!--        this.$emit("update:modelValue", event.target.value);-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->


<template>
    <div>
        <input :value="modelValue" @input="inputChange">

        <!-- 封装组件内用按钮触发事件 -->
        <button @click="btnClick">hyinput按钮</button>
        <h2>HyInput的message: {{modelValue}}</h2>

        <!-- 3.绑定到props中是不对的 无法改变父组件中的modelValue值 -->
<!--        <input v-model="modelValue">-->
    </div>
</template>

<script>
    export default {
        props: {
            modelValue: String
        },
        emits: ["update:modelValue"],
        methods: {
            inputChange(event) {
                //注意第一个参数格式就为 update:属性名 event.target.value为元素(输入框)的值
                this.$emit("update:modelValue", event.target.value);
            },
            btnClick() {
                this.$emit("update:modelValue", '111');
            }
        }
    }
</script>
