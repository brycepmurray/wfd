<template>
    <div class="calendar">
        <div class="container-fluid">
            <div class="row text center">
                <div class="col-xs-2">
                    <h1>M</h1>
                </div>
                <div class="col-xs-9">
                    <h1>Dinner here</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-2">
                    <h1>T</h1>
                </div>
                <div class="col-xs-9">
                    <h1>Dinner here</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-2">
                    <h1>W</h1>
                </div>
                <div class="col-xs-9">
                    <h1>Dinner here</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-2">
                    <h1>T</h1>
                </div>
                <div class="col-xs-9">
                    <h1>Dinner here</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-2">
                    <h1>F</h1>
                </div>
                <div class="col-xs-9">
                    <h1>Dinner here</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-2">
                    <h1 class="days">S</h1>
                </div>
                <div class="col-xs-9">
                    <h1>Dinner here</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-2">
                    <h1>S</h1>
                </div>
                <div class="col-xs-9">
                    <h1>Dinner here</h1>
                </div>
            </div>


        </div>


    </div>
</template>


<script>

    export default {
        name: 'calendar',
        data() {
            return {}
        },
        computed: {},
        methods: {},
        components: {}
    }
</script>


<style scoped>
    .calendar{
        background-color: white
    }

    .row:hover{
        background-color: rgba(0, 0, 0, 0.24)
    }
    .col-xs-2 {
        outline-style: solid;
        /* height: 100%; */
    }

    .col-xs-9 {
        outline-style: solid;
        /* height: 100%; */
    }

    .h1 {
        font-size: 30px;
        font-size: 3.5vw;
    }
</style>