<template>
    <div class="about">
        <h4>{{$route.query.name}}</h4>
        <h4>{{$route.query.age}}</h4>
    </div>
</template>

<script>
    export default {
        name: 'About',
    }
</script>

<style scoped lang="less">

</style>
