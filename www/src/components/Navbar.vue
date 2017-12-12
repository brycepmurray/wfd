<template>
  <div>
    <ul>
      <li>
        <a class="home" href="#">Home</a>
      </li>
      <li>
        <a href="">Shopping List</a>
      </li>
      <li>
        <button type="button" id="sidebarCollapse2" class="btn btn-info navbar-btn">
          <i class="glyphicon glyphicon-align-right"></i>
          Toggle Calendar
        </button>
      </li>
      <li class="logout">
        <a href="#login">Log Out</a>
      </li>
    </ul>
    <!-- <footer>
      <h6>Coolio, Julio</h6>
    </footer> -->
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

  .logout {
    float: right;
  }

  .logout:hover {
    color: red;

  }

  li a:hover {
    background-color: #111;
  }
</style>