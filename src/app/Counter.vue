<template>
    <div class="counter">
        {{ number }}
        <a href="#" @click.prevent = 'increment'>Increment Number</a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                number : 1
            }
        },
        methods : {
            increment () {
                this.number++
            }
        }
    }
</script>