<template>
    <div class="meal">
        <div class="col-lg-10 col-xs-8 text-center bryce">
            <div @click="setActiveRecipe()" class="card col-lg-8" style="width: 28rem;" draggable="true" v-on:dragstart.capture="moving">
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
</style>