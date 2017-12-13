<template>
    <div class="container">
        <div class="cookbook" v-for="recipe in cookBook">
            <p>{{recipe.label}}</p>


        </div>
    </div>
</template>


<script>

    export default {
        name: 'cookBook',
        data() {
            return {}
        },
        computed: {
            results() {
                return this.$store.state.cookBook
            }
        },
        methods: {},
        components: {}
    }
</script>


<style scoped>
</style>