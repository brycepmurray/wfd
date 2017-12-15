<template>
    <div class="container">
        <h1>Shopping List:</h1><br>
        <div v-for="item in shopping" class="shopping">
            <h4><li>{{item.description}}</li></h4>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'shopping',
        data() {
            return {}
        },
        mounted() {
            this.$store.dispatch('getShopList', this.$route.params.id)
        },
        computed: {
            shopping() {
                return this.$store.state.shopping
            }
        },
        methods: {},
        components: {}
    }
</script>


<style scoped>
</style>