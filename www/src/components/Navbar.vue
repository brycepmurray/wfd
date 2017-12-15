<template>
    <div>
        <ul>
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
                <h3>Welcome, {{user.name}}</h3>
            </li>

            <li class="logout">
                <a @click="logout">Log Out</a>
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
            user(){
            return this.$store.state.user
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('logout')
            }
        },
        components: {}
    }
</script>


<style scoped>
    ul {
        list-style-type: none;
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
        text-decoration: none;
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