<template>
        <div>
            <div> 
    
                <!-- Sidebar -->
                <div id="sidebar">
                    <!-- Sidebar Header -->
                    <div class="sidebar-header row">
                        <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn">
                            <i class="glyphicon glyphicon-align-right"></i>
                            
                        </button>
                    </div>
    
                    <!-- Sidebar Links -->
                    <ul class="list-unstyled components">
                        <li class="active">
                            <a href="#">
                                <div class="row">
                                    <div class="col-xs-2">
                                        <div class="row" style="background-color:rgb(202, 86, 86)">
                                            <strong>Day</strong>
                                        </div>
                                        <h5>1</h5>
                                    </div>
                                    <div class="col-xs-9" droppable="true" v-on:drop.capture="addItem" ondragover="event.preventDefault()">
                                        <h4>Dinner Here</h4>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="row">
                                    <div class="col-xs-2">
                                        <div class="row" style="background-color:rgb(202, 86, 86)">
                                            <strong>Day</strong>
                                        </div>
                                        <h5>2</h5>
                                    </div>
                                    <div class="col-xs-9" droppable="true" v-on:drop.capture="addItem" ondragover="event.preventDefault()">
                                        <h4>Dinner here</h4>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="row">
                                    <div class="col-xs-2">
                                        <div class="row" style="background-color:rgb(202, 86, 86)">
                                            <strong>Day</strong>
                                        </div>
                                        <h5>3</h5>
                                    </div>
                                    <div class="col-xs-9" droppable="true" v-on:drop.capture="addItem" ondragover="event.preventDefault()">
                                        <h4>Dinner here</h4>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="row">
                                    <div class="col-xs-2">
                                        <div class="row" style="background-color:rgb(202, 86, 86)">
                                            <strong>Day</strong>
                                        </div>
                                        <h5>4</h5>
                                    </div>
                                    <div class="col-xs-9" droppable="true" v-on:drop.capture="addItem" ondragover="event.preventDefault()">
                                        <h4>Dinner here</h4>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="row">
                                    <div class="col-xs-2">
                                        <div class="row" style="background-color:rgb(202, 86, 86)">
                                            <strong>Day</strong>
                                        </div>
                                        <h5>5</h5>
                                    </div>
                                    <div class="col-xs-9" droppable="true" v-on:drop.capture="addItem" ondragover="event.preventDefault()">
                                        <h4>Dinner here</h4>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="row">
                                    <div class="col-xs-2">
                                        <div class="row" style="background-color:rgb(202, 86, 86)">
                                            <strong>Day</strong>
                                        </div>
                                        <h5>6</h5>
                                    </div>
                                    <div class="col-xs-9" droppable="true" v-on:drop.capture="addItem" ondragover="event.preventDefault()">
                                        <h4>Dinner here</h4>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="row">
                                    <div class="col-xs-2">
                                        <div class="row" style="background-color:rgb(202, 86, 86)">
                                            <strong>Day</strong>
                                        </div>
                                        <h5>7</h5>
                                    </div>
                                    <div class="col-xs-9" droppable="true" v-on:drop.capture="addItem" ondragover="event.preventDefault()">
                                        <h4>Dinner here</h4>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
    
                <!-- Page Content -->
                <div id="content">
                    <!-- We'll fill this with dummy content -->
                </div>
    
            </div>
        </div>
    
    </template>
    
    
    <script>
        $(document).ready(function () {
    
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                
            });
            
    
        });
        $(document).ready(function () {
    
            $('#sidebarCollapse2').on('click', function () {
                $('#sidebar').toggleClass('active');
                
    
            });
            
    
        });
            export default {
            name: 'calendar',
            data() {
                return {}
            },
            computed: {},
            methods: {
                addItem(event){
          var item = JSON.parse(event.dataTransfer.getData('text/javascript'))
          this.room.items.push(item)
        }
            },
            components: {}
        }
    </script>
    
    
    <style scoped>
        .wrapper {
            display: flex;
            align-items: stretch;
            
        }
        

    
        #sidebar.active {
            margin-left: 223px;
            /* float: right; */
        }
    
        #sidebar {
            min-width: 250px;
            max-width: 250px;
            min-height: 100vh;
            background-color: silver;
        }
    
        .col-xs-2 {
            outline-style: solid;
            background-color: #fef1da;
    
        }
    
        .col-xs-9 {
            outline-style: solid;
            background-color: #fef1da;
    
        }
    
        .h1 {
            font-size: 30px;
            font-size: 3.5vw;
        }
        .navbar-btn{
            float: left;
        }
    </style>