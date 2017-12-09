<template>
  <div>
      <ul>
          <li><a class="active" href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li class="logout"><a href="#login">Log Out</a></li>
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
    computed: {},
    methods: {},
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

li a:hover {
  background-color: #111;
}

.logout{
  position: fixed;
  right: 5px
}
.logout:hover{
  color: red;

}
</style>