<template>
    <div class="container-fluid">

        <!-- begin modal -->
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

        <div class="row" id="main">
            <div v-for="meal in cookBook">
            <div class="col-xs-4">
                        <Meal :mealprop="meal"></Meal>
                    </div>
                </div>

            <div>
                </div>

                <button id="openNav" class="w3-button w3-teal w3-xlarge" @click="openCal()"><span class="glyphicon glyphicon-calendar"></span></button>
            </div>
            <div class="w3-sidebar w3-bar-block w3-card w3-animate-right" style="display:none" id="mySidebar">
                <!-- begin calendar -->
                <div class="col-xs-4 fixedYo ">
                    <span @click="closeCal()" class="w3-bar-item w3-button w3-large glyphicon glyphicon-remove"></span>
                    <table class="table-fill">
                        <thead>
                            <tr>
                                <th class="day" >Week 1</th>
                                
                            </tr>
                        </thead>
                        <tbody class="table-hover">
                            
                                <!-- <td class="day">Monday</td>
                                <td droppable="true" v-on:drop.capture="addItem" ondragover="event.preventDefault()">$ 50,000.00</td>
                                <td>January</td> -->
                                <day :dayprop="day" :index="i" v-for="(day, i) in days"></day>

                            
                           
                        </tbody>
                    </table>
                </div>
                <!-- end calendar                  -->


            </div>
    </div>
</template>


<script>
    const swal = require('sweetalert2')
    import Meal from './Meal'
    import Day from './Day'
    export default {
        name: 'cookBook',
        data() {
            return {
                day: {
                    name: "Sunday"
                }
            }
        },
        mounted() {
            this.$store.dispatch('getCookBook', this.$route.params.id)
            this.$store.dispatch('getWeek')
        },

        computed: {
            cookBook() {
                return this.$store.state.cookBook
            },
            activeRecipe() {
                return this.$store.state.activeRecipe
            },
            days() {
                return this.$store.state.week
            }
        },

        methods: {



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

            openCal() {
                document.getElementById("main").style.marginRight = "35%";
                document.getElementById("mySidebar").style.width = "30%";
                document.getElementById("mySidebar").style.height = "70%";
                document.getElementById("mySidebar").style.display = "block";
                document.getElementById("openNav").style.display = 'none';
            },

            closeCal() {
                document.getElementById("main").style.marginRight = "0%";
                document.getElementById("mySidebar").style.display = "none";
                document.getElementById("openNav").style.display = "inline-block";
            }
        },

        components: {
            Meal,
            Day
        }
    }
</script>
<style scoped>
    #meal {
        width: 28rem;
    }
    
    #openNav {
        position: fixed;
        width: 75px;
        height: 75px;
        right: 0px;
        border-radius: 15px;
        background-color: rgba(211, 211, 211, 0.540);
        box-shadow: 5px 5px rgba(138, 138, 138, 0.384);
    }
    
    #openNav:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.650);
        box-shadow: 5px 5px rgba(51, 51, 51, 0.650);
    }
    
    .glyphicon-calendar {
        font-size: 25px;
    }
    
    .glyphicon {
        cursor: pointer;
    }
    
    .container-fluid {
        text-align: center;
        width: 90%;
    }
    
    .ft {
        text-align: right;
    }
    
    .to {
        margin-top: 10px;
    }
    
    .glyphicon-trash:hover {
        transform: scale(2, 2);
    }
    
    .glyphicon-trash:hover {
        color: rgb(150, 1, 1)
    }
    
    .glyphicon-new-window {
        margin-left: 10px;
    }
    
    .glyphicon-plus:hover {
        color: rgb(2, 117, 10);
        background-color: rgba(255, 255, 255, 0.87);
    }
    
    .glyphicon-plus {
        outline: 1px solid green;
        background-color: green;
        padding: 3px;
        color: white;
    }
    
    .card {
        padding: 15px;
        left: 65px;
        margin: 25px;
        height: 400px;
        background-color: rgba(255, 255, 255, 0.700);
        box-shadow: 5px 5px rgba(138, 138, 138, 0.384);
        border-radius: 6%;
    }
    
    .card:hover {
        cursor: pointer;
        background-color: rgb(255, 255, 255);
        box-shadow: 5px 5px #333;
    }
    
    .card-img-top {
        width: 200px;
        height: 200px;
    }
    
    .text-center {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    /* -----------------------------------------------------------------TABLE */
    
    .glyphicon-remove {
        font-size: 30px;
    }
    
    .glyphicon-remove:hover {
        color: rgb(105, 9, 9)
    }
    
    .fixedYo {
        position: fixed;
        right: 28px;
        top: 88px;
    }
    
    .bryce {
        padding-top: 50px;
        margin-left: 20px;
    }
    
    .day {
        width: 2em !important;
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
    
    tr:first-child {
        border-top: none;
    }
    
    tr:last-child {
        border-bottom: none;
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
        width: 5em;
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