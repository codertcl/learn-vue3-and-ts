import {createNamespacedHelpers, mapState} from "vuex";
import useMapper from "./useMapper";

export default function useState(moduleName, mapper) {
    let mapperFn = mapState
    //第一个参数为字符串,且不为空 表示获取子module内的数据
    if (typeof moduleName === 'string' && moduleName.length > 0) {
        mapperFn = createNamespacedHelpers(moduleName).mapState
    }
    //没有传模块名,即直接获取根root中数据
    else {
        mapper = moduleName
    }
    return useMapper(mapper, mapperFn)
}
