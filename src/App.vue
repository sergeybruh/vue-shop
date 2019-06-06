<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Product list</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/cart">Cart - <span class="badge badge-secondary">{{getProductsAmount}} items</span></router-link>
          </li>

          <li class="nav-item active fleft">
            <router-link class="nav-link" to="/registration">Registration</router-link>
          </li>
          
        </ul>   
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
      getProductsAmount() {
        let counter = 0;
        this.$store.state.cartObj.forEach(el => {
          counter = counter + el.amount;
        });
        return counter;
      }
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.navbar-nav {
  display: block;
  position: relative;
  width: 100%;
}
.nav-item {
  float: left;
}
.fleft {
  float: right;
  position: absolute;
  right: 10px;
}
</style>
