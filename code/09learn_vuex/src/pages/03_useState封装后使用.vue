<template>
    <div>
        <h4>count:{{count}}</h4>
        <h5>{{name}}</h5>
        <h5>{{height}}</h5>
        <h5>{{age}}</h5>
        <h5>{{age1}}</h5>
        <h5>{{count1}}</h5>
    </div>
</template>

<script>
    import useState from '../hooks/useState.js'

    export default {
        name: "03_useState封装后使用",
        setup() {
            //传入数组或者对象
            const storeState = useState(["name", "age", "height", "count"])
            const storeState2 = useState({
                name1: 'name',
                age1: state => state.age,
                count1: state => state.count,
            })
            return {
                ...storeState,
                ...storeState2
            }
        }
    }
</script>
