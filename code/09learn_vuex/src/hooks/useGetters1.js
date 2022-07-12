import {mapGetters, useStore} from "vuex";
import {computed} from "vue";

export default function useGetters(mapper) {
    const store = useStore()
    //storeGettersFns为对象 其包含三个函数
    const storeGettersFns = mapGetters(mapper)
    let storeGetters = {}
    Object.keys(storeGettersFns).forEach(key => {
        //fn为key属性对应的计算属性函数  bind设置fn函数中的this为store(Vuex中的store对象)
        const fn = storeGettersFns[key].bind({$store: store})
        storeGetters[key] = computed(fn)
    })
    return storeGetters
}
