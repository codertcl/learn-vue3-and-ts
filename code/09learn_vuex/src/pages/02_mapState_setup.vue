<template>
    <div>
        <h4>count:{{count}}</h4>
        <h5>{{name}}</h5>
        <h5>{{height}}</h5>
        <h5>{{age}}</h5>
    </div>
</template>

<script>
    import {computed} from 'vue'
    import {mapState, useStore} from 'vuex'

    export default {
        name: "02_mapState_setup",
        computed: {
            fullName: function () {
                return "1fdasfdasfad"
            },
            // ...mapState(["name", "age"])
        },
        setup() {
            const count = computed(() => store.state.count)

            //setup中使用mapState获取state属性中的值
            const store = useStore()
            //storeStateFns为对象 其包含三个函数
            const storeStateFns = mapState(["name", "age", "height"])
            console.log(storeStateFns)
            let storeState = {}
            Object.keys(storeStateFns).forEach(key => {
                //fn为key属性对应的计算属性函数  bind设置fn函数中的this为store(Vuex中的store对象)
                const fn = storeStateFns[key].bind({$store: store})
                storeState[key] = computed(fn)
            })
            return {
                count, ...storeState
            }
        }
    }
</script>
