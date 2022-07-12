<template>
    <div>
        <h4>Home:{{$store.state.count}}</h4>
        <button @click="incrementAction">+2</button>
        <button @click="add">+1</button>
        <button @click="decrementAction">-1</button>
        <button @click="sub">-1</button>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "09_actions的辅助函数",
        methods: {
            // ...mapActions(['decrementAction', 'incrementAction']),
            // ...mapActions({add: 'incrementAction', sub: 'decrementAction'}),
        },
        setup() {
            const actions = mapActions(["incrementAction", "decrementAction"])
            const actions2 = mapActions({
                add: "incrementAction",
                sub: "decrementAction"
            })

            return {
                ...actions,
                ...actions2
            }
        }
    }
</script>
