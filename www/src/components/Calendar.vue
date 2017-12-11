<template>
    <div class="calendar">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-2">
                    <h1>Mon</h1>
                </div>
                <div class="col-xs-9">
                    <h1>Dinner here</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-2">
                    <h1>Tue</h1>
                </div>
                <div class="col-xs-9">
                    <h1>Dinner here</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-2">
                    <h1>Wed</h1>
                </div>
                <div class="col-xs-9">
                    <h1>Dinner here</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-2">
                    <h1>Thur</h1>
                </div>
                <div class="col-xs-9">
                    <h1>Dinner here</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-2">
                    <h1>Fri</h1>
                </div>
                <div class="col-xs-9">
                    <h1>Dinner here</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-2">
                    <h1 class="days">Sat</h1>
                </div>
                <div class="col-xs-9">
                    <h1>Dinner here</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-2">
                    <h1>Sun</h1>
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