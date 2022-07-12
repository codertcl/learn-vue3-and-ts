<template>
    <div>
        <h2>{{ $store.state.rootCount }}</h2>
        <h2>{{ $store.state.home.homeCount }}</h2>
        <h2>{{ $store.state.user.userCount }}</h2>
    </div>
</template>

<script>
    export default {
        setup() {
        }
    }
</script>
