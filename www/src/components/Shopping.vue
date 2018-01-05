<template>
    <div class="container">
        <h1 v-if="user.name"><b>{{user.name}}</b>'s  Shopping List:</h1><br>
        <h1 v-if="!user.name">Example shopping list:</h1>
        <span @click="printList()" class="glyphicon glyphicon-print">Print</span>
        <div>
            
               
        </div>
        <div class="shopping row">
        <div v-for="item in shopping" class="text-left">
            <h4 v-if="user.name" class="col-md-6"><li>{{item.description}}
                <span class="glyphicon glyphicon-trash" @click="removeFromShopList(item)"></span></li> </h4>
           </div>
                <h4 v-if="!user.name" class="col-md-6 text-left">
                <li>8 dozen eggs<span class="glyphicon glyphicon-trash"></span></li> 
                <li>1/2 pound pig<span class="glyphicon glyphicon-trash"></span></li> 
                <li>Sour dough bread<span class="glyphicon glyphicon-trash"></span></li> 
                <li>Parsley<span class="glyphicon glyphicon-trash"></span></li> 
                <li>Apples<span class="glyphicon glyphicon-trash"></span></li> 
                
            </h4>
        
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
                    title: 'Removing item...',
                    showConfirmButton: false,
                    timer: 321
                })

            },
            printList() {
                window.print()
            }

        },
        components: {}
    }
</script>


<style scoped>
    .shopping {
        background-color: white;
        padding: 10px;
        border-radius: 20px;
        width: 100%;
    }
    
    h4 {
        font-family: 'Montserrat', cursive;
        font-size: 2rem
    }
    
    .glyphicon-trash {
        font-size: 15px;
        cursor: pointer;
    }
    
    .glyphicon-trash:hover {
        color: rgb(138, 4, 4);
    }
    
    .glyphicon-print {
        font-size: 30px;
        cursor: pointer;
        padding-left: 70%
    }
    
    .glyphicon-print:hover {
        color: black;
    }
</style>