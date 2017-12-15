<template>
    <div class="container">
        <h1>{{user.name}}'s Shopping List:</h1><br>
        <div v-for="item in shopping" class="shopping">
            <h4><li>{{item.description}}
                <span class="glyphicon glyphicon-trash" @click="removeFromShopList(item)"></span></li> </h4>
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
            this.$store.dispatch('getShopList', this.$store.state.user)
        },
        computed: {
            shopping() {
                return this.$store.state.shopping
            },
            user(){
                return this.$store.state.user
            }
        },
        methods: {
            removeFromShopList(item){
                this.$store.dispatch("removeFromShopList", item)

            }
        },
        components: {}
    }
</script>


<style scoped>
</style>