import {mapState, useStore} from "vuex";
import {computed} from "vue";

export default function useState(mapper) {
    const store = useStore()
    //storeStateFns为对象 其包含三个函数
    const storeStateFns = mapState(mapper)
    let storeState = {}
    Object.keys(storeStateFns).forEach(key => {
        //fn为key属性对应的计算属性函数  bind设置fn函数中的this为store(Vuex中的store对象)
        const fn = storeStateFns[key].bind({$store: store})
        storeState[key] = computed(fn)
    })
    return storeState
}
