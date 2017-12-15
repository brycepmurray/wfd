<template>
    <div class="container">
        <h1><u>{{user.name}}'s Shopping List:</u></h1><br>
        <div v-for="item in shopping" class="shopping text-left">
            <h4><li><b>{{item.description}}</b>
                <span class="glyphicon glyphicon-trash" @click="removeFromShopList(item)"></span></li> </h4>
        </div>
    </div>
</template>


<script>
    const swal = require('sweetalert2')
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
            user() {
                return this.$store.state.user
            }
        },
        methods: {
            removeFromShopList(item) {
                this.$store.dispatch("removeFromShopList", item)
                return swal({
                    position: 'top-right',
                    type: 'error',
                    title: 'Item removed from shopping list',
                    showConfirmButton: false,
                    timer: 300
                  })

            }
        },
        components: {}
    }
</script>


<style scoped>
.glyphicon-trash{
    cursor: pointer;
}

.glyphicon-trash:hover{
    color: rgb(138, 4, 4)
}
</style>