<template>
    <div>
        <h4>{{nameInfo}}</h4>
        <h4>{{ageInfo}}</h4>
        <h4>{{sNameInfo}}</h4>
        <h4>{{sAgeInfo}}</h4>
    </div>
</template>

<script>
    import {useGetters} from "@/hooks/index";

    export default {
        name: "05_(Vue3)mapGetters",
        setup() {
            ////返回值为函数 获取向相应的functions {name:function,age:function}
            // let storeGetters = mapGetters(['nameInfo', 'ageInfo'])
            const storeGetters=useGetters(['nameInfo', 'ageInfo'])
            const storeGetters2=useGetters({sNameInfo:'nameInfo', sAgeInfo:'ageInfo'})
            return {
                ...storeGetters,
                ...storeGetters2,
            }
        }
    }
</script>
