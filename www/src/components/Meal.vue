<template>
    <div class="meal">
        
            <div @click="setActiveRecipe()" class="card" style="width: 28rem;" draggable="true" v-on:dragstart.capture="moving">
                <div class="ft">
                    <span class="glyphicon glyphicon-trash" @click="removeFromCookBook()"></span>
                </div>
                <img class="card-img-top" :src="mealprop.imageUrl" alt="Card image cap" data-toggle="modal" data-target="#myModal">
                <div class="card-block">
                    <h5 data-toggle="modal" data-target="#myModal" class="card-title">
                        <strong>{{mealprop.label}}</strong>
                    </h5>
                    <p class="card-text" v-if="mealprop.source == 'No Recipes'">Yummy!!</p>
                    <p class="card-text" v-else>{{mealprop.source}}</p>
                    <a :href="mealprop.url" target="_blank" class="btn btn-primary to">View Recipe
                        <span class="glyphicon glyphicon-new-window"></span>
                    </a>
                    </button>
            
            </div>
        </div>
    </div>
</template>


<script>
    const swal = require('sweetalert2')

    export default {

        name: 'meal',
        props: ["mealprop"],
        data() {
            return {

            }
        },
        computed: {},
        methods: {
            moving(event) {
                console.log(event)
                event.dataTransfer.setData('text/javascript', JSON.stringify(this.mealprop))
                console.log('We are moving')
            },

            setActiveRecipe() {
                this.$store.dispatch("setActiveRecipe", this.mealprop)
            },
            removeFromCookBook() {
                this.$store.dispatch("removeFromCookBook", this.mealprop)
                return swal({
                    position: 'top-right',
                    type: 'success',
                    title: 'Recipe removed',
                    showConfirmButton: false,
                    timer: 1000
                })
            },
        },
        components: {}
    }
</script>


<style scoped>
    .container-fluid {
        text-align: center;
        width: 80%;
    }
    
    .words {
        font-size: 2rem
    }
    
    .glyphicon-new-window {
        margin-left: 10px
    }
    
    .hashtag {
        padding: 40px;
        text-align: center;
    }
    
    .modal-title {
        background-color: rgba(0, 0, 0, 0.603);
        color: white
    }
    
    .modal-body {
        text-align: left;
        background-color: rgba(75, 75, 75, 0.726);
        color: white
    }
    
    .row {
        width: 100%
    }
    
    .wide {
        width: 100%
    }
    
    .card {
        padding: 15px;
        margin: 25px;
        height: 400px;
        background-color: rgba(255, 255, 255, 0.700);
        box-shadow: 5px 5px rgb(138, 138, 138);
        border-radius: 6%
    }
    
    .card:hover {
        cursor: pointer;
        background-color: white;
        box-shadow: 5px 5px rgb(44, 44, 44);
    }
    
    .card-img-top {
        width: 200px;
        height: 200px;
        border-radius: 6%
    }
    
    .glyphicon-trash:hover {
        transform: scale(2, 2);
    }
    
    .glyphicon-trash:hover {
        color: rgb(150, 1, 1)
    }
    
    .ft {
        text-align: right;
    }
    
    .to {
        margin-top: 10px;
    }
</style>