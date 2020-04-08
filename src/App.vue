<template>
    <div>
        <router-view></router-view>
        <FootGuide v-show="$route.meta.showRooter"></FootGuide>
    </div>
</template>

<script>
    import FootGuide from "./components/FootGuide/FootGuide";

    export default {
        name: "App",
        components: {
            FootGuide
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .app
        color: red
</style>