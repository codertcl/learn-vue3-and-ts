<template>
    <div>
        <!--        <h2>总价值: {{ totalPrice }}</h2>-->
        <h2>总价值: {{ $store.getters.totalPrice }}</h2>
        <h2>总价值: {{ $store.getters.totalPriceCountGreaterN(2) }}</h2>
        <h2>{{ageInfo}}</h2>
        <h2>{{sAgeInfo}}</h2>
        <h2>{{nameInfo}}</h2>
        <h2>{{sNameInfo}}</h2>
        <hr>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "04_mapGetters_computed(Vue2)",
        computed: {
            // totalPrice() {
            //     return this.$store.state.books.reduce((prev, cur) => {
            //         return prev + cur.price * cur.count
            //     }, 0)
            // }
            ...mapGetters(['nameInfo', 'ageInfo']),
            ...mapGetters({
                sNameInfo: "nameInfo",
                sAgeInfo: "ageInfo"
            })
        }
    }
</script>
