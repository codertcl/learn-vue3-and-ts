<template>
    <div>
        <button @click="btnClick">按钮</button>
    </div>
</template>

<script>
    import emitter from "./utils/eventbus";
    import {aboutEvent} from "./utils/constants";

    export default {
        name: "About",
        methods: {
            btnClick() {
                emitter.emit(aboutEvent, {name: '冰冰', age: 31})
            }
        }
    }
</script>

<style scoped>

</style>
