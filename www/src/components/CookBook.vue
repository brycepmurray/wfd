<template>
    <div class="container-fluid">

        <!-- Modal -->
        <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">
                            <strong>{{activeRecipe.label}}</strong>
                        </h4>

                        <div class="row text-right">
                            <div class="col-xs-6">
                                <img class="card-img-top" :src="activeRecipe.imageUrl" alt="Card image cap">
                            </div>
                            <div class="col-xs-6">
                                <h5 v-for="i in activeRecipe.healthLabels">#{{i}}</h5>
                            </div>
                        </div>
                        <div class="modal-body text-left">
                            <h3>Ingredients:</h3>
                            <h6> (click
                                <span class="glyphicon glyphicon-plus"></span> to add to shopping list)</h6>
                            <ul>
                                <h5 class="modal-title" v-for="t in activeRecipe.ingredients">
                                    <li>{{t}}
                                        <span @click='addToShopList(t)' class="glyphicon glyphicon-plus"></span>
                                    </li>
                                </h5>
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <h5>Servings: {{activeRecipe.servings}}</h5>
                            <h5>Calories: {{Math.floor(activeRecipe.calories)}}</h5>
                            <h5 v-for="i in activeRecipe.dietLabels">{{i}}</h5>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <a :href="activeRecipe.url" target="_blank" class="btn btn-primary">View Directions
                                <span class="glyphicon glyphicon-new-window"></span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- end of Modal -->

        <div class="row text-left ">
            <div class="col-lg-8 text-center bryce">
                <div @click="setActiveRecipe(recipe)" class="card col-lg-8" style="width: 28rem;" v-for="recipe in cookBook" draggable="true"
                    v-on:dragstart.capture="moving">
                    <div class="ft">
                        <span class="glyphicon glyphicon-trash" @click="removeFromCookBook(recipe)"></span>
                    </div>
                    <img class="card-img-top" :src="recipe.imageUrl" alt="Card image cap" data-toggle="modal" data-target="#myModal">
                    <div class="card-block">
                        <h5 data-toggle="modal" data-target="#myModal" class="card-title">
                            <strong>{{recipe.label}}</strong>
                        </h5>
                        <p class="card-text" v-if="recipe.source == 'No Recipes'">Yummy!!</p>
                        <p class="card-text" v-else>{{recipe.source}}</p>
                        <a :href="recipe.url" target="_blank" class="btn btn-primary to">View Recipe
                            <span class="glyphicon glyphicon-new-window"></span>
                        </a>
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 fixedYo ">
                
                <table class="table-fill">
                    <thead>
                        <tr>
                            <th class="day">Day</th>
                            <th>Week 1</th>
                            <th>Week 2</th>
                        </tr>
                    </thead>
                    <tbody class="table-hover">
                        <tr>
                            <td>Monday</td>
                            <td>$ 50,000.00</td>
                            <td>January</td>

                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>$ 50,000.00</td>
                            <td>January</td>

                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>$ 50,000.00</td>
                            <td>January</td>

                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>$ 10,000.00</td>
                            <td>January</td>

                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>$ 85,000.00</td>
                            <td>January</td>

                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>$ 56,000.00</td>
                            <td>January</td>

                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>$ 98,000.00</td>
                            <td>January</td>

                        </tr>
                    </tbody>
                </table>
            </div>

            
        </div>
    </div>
    </div>
</template>


<script>
    const swal = require('sweetalert2')
    export default {
        name: 'cookBook',
        data() {
            return {
                activeRecipe: {}
            }
        },
        mounted() {
            this.$store.dispatch('getCookBook', this.$route.params.id)

        },
        computed: {
            cookBook() {
                return this.$store.state.cookBook
            }


        },
        methods: {
            removeFromCookBook(recipe) {
                this.$store.dispatch("removeFromCookBook", recipe)
                return swal({
                    position: 'top-right',
                    type: 'success',
                    title: 'Recipe removed',
                    showConfirmButton: false,
                    timer: 1000
                })
            },
            setActiveRecipe(recipe) {
                this.activeRecipe = recipe
            },
            addToShopList(t) {
                var item = {
                    description: t
                }
                this.$store.dispatch('addToShopList', item)
                return swal({
                    position: 'top-right',
                    type: 'success',
                    title: 'Added to shopping list',
                    showConfirmButton: false,
                    timer: 570
                })
            },
        },
        components: {}
    }
</script>
<style scoped>
    .container-fluid {
        text-align: center;
        width: 90%;
    }

    .ft {
        text-align: right;
    }

    .to {
        margin-top: 10px
    }

    .glyphicon-trash:hover {
        transform: scale(2, 2)
    }

    .glyphicon-trash:hover {
        color: rgb(150, 1, 1)
    }

    .glyphicon-new-window {
        margin-left: 10px;
    }

    .glyphicon-plus:hover {
        color: rgb(2, 117, 10);
        background-color: rgba(255, 255, 255, 0.87)
    }

    .glyphicon-plus {
        cursor: pointer;
        outline: 1px solid green;
        background-color: green;
        padding: 3px;
        color: white
    }

    .card {
        padding: 20px;
        margin: 10px;
        height: 400px;
        background-color: rgba(255, 255, 255, 0.815);
        box-shadow: 5px 5px rgba(138, 138, 138, 0.384);
        border-radius: 6%
    }

    .card:hover {
        cursor: pointer;
        background-color: rgb(255, 255, 255);
        box-shadow: 5px 5px #333;
        ;
    }

    .card-img-top {
        width: 200px;
        height: 200px
    }

    .text-center {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    /* -----------------------------------------------------------------TABLE */

    .fixedYo{
        position: fixed;
        right: 80px;
        top: 112px
         
    }

    .bryce{
        padding-top: 50px;

    }

    .day {
        width: 50px;
    }
 
    

    div.table-title {
        display: block;
        margin: auto;
        max-width: 600px;
        padding: 5px;
        width: 100%;
    }

    .table-title h3 {
        color: #fafafa;
        font-size: 30px;
        font-weight: 400;
        font-style: normal;
        font-family: "Roboto", helvetica, arial, sans-serif;
        text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
        text-transform: uppercase;
    }


    /*** Table Styles **/

    .table-fill {
        background: white;
        border-radius: 3px;
        border-collapse: collapse;
        height: 320px;
        margin: auto;
        max-width: 600px;
        padding: 5px;
        width: 100%;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        animation: float 5s infinite;
    }

    th {
        color: #D5DDE5;
        background-color: #333;
        border-bottom: 4px solid #9ea7af;
        border-right: 1px solid #343a45;
        font-size: 23px;
        font-weight: 100;
        padding: 24px;
        text-align: left;

    }

    th:first-child {
        border-top-left-radius: 3px;

    }

    th:last-child {
        border-top-right-radius: 3px;
        border-right: none;
    }

    tr {
        border-top: 1px solid #C1C3D1;
        border-bottom: 1px solid #C1C3D1;
        color: #666B85;
        font-size: 16px;
        font-weight: normal;
        text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
    }

    tr:hover td {
        background: rgb(49, 116, 40);
        color: #FFFFFF;
        border-top: 1px solid #22262e;
    }

    tr:first-child {
        border-top: none;
    }

    tr:last-child {
        border-bottom: none;
    }

    tr:nth-child(odd) td {
        background: #EBEBEB;
    }

    tr:nth-child(odd):hover td {
        background: #4E5066;
    }

    tr:last-child td:first-child {
        border-bottom-left-radius: 3px;
    }

    tr:last-child td:last-child {
        border-bottom-right-radius: 3px;
    }

    td {
        background: #FFFFFF;
        padding: 20px;
        text-align: center;
        vertical-align: middle;
        font-weight: 300;
        font-size: 18px;
        text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
        border-right: 1px solid #C1C3D1;
    }

    td:last-child {
        border-right: 0px;
    }

    th.text-left {
        text-align: left;
    }

    th.text-center {
        text-align: center;
    }

    th.text-right {
        text-align: right;
    }

    td.text-left {
        text-align: left;
    }

    td.text-center {
        text-align: center;
    }

    td.text-right {
        text-align: right;
    }
</style>