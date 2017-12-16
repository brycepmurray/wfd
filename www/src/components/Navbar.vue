<template>
    <div>
        <ul>
          <div class="col-xs-6">
          <li>
            <a class="home" href="#">Home</a>
          </li>
          <li>
            <a href="#shopping">Shopping List</a>
          </li>
          
          <li>
            <a href="#cookbook">Cookbook</a>
          </li>
          <li>
            <a href="#calendar">Calendar</a>
              </li>
            </div>

            <li>
                <h3 v-if="user.name">Welcome, {{user.name}}</h3>
                <h3 v-if="!user.name">Welcome, traveler</h3>
            </li>

            <li v-if="user.name" class="logout">
                <a v-if="user.name" @click="logout">Log Out</a>
            </li>
            <li v-if="!user.name" class="logout">
                    <a @click="logout">Log In</a>
            </li>
        </ul>

    </div>
</template>



<script>
    export default {
        name: 'navbar',
        data() {
            return {

            }
        },
        computed: {
            user() {
                return this.$store.state.user
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('logout')
            },
            login(){
                this.$store.dispatch('authenticate')
            }
        },
        components: {}
    }
</script>


<style scoped>
    ul {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    }
    
    li {
        float: left;
    }
    
    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        font-family: 'Itim', cursive;

    }
    
    h3 {
        color: white;
        display: block;
        text-align: center;
        font-family: 'Itim', cursive;

    }
    
    .logout {
        float: right;
        cursor: pointer;
    }
    
    .logout:hover {
        color: red;
    }
    
    li a:hover {
        background-color: #111;
    }
</style>