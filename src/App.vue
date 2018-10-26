<template>
    <div id="app">
        <counter></counter>
    </div>
</template>

<script>
    import Counter from '@/app/Counter'

    export default {
        name : 'app',
        components : {
            Counter
        }
    }
</script>

<style lang="scss">
    @import '~styles/app';
</style>
