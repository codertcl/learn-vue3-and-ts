import {useStore} from "vuex";
import {computed} from "vue";

export default function useMapper(mapper, mapFn) {
    const store = useStore()
    //storeFns为对象 其包含三个函数
    const storeFns = mapFn(mapper)
    let res = {}
    Object.keys(storeFns).forEach(key => {
        //fn为key属性对应的计算属性函数  bind设置fn函数中的this为store(Vuex中的store对象)
        const fn = storeFns[key].bind({$store: store})
        res[key] = computed(fn)
    })
    return res
}
