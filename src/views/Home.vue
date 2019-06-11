<template>
  <div class="home container">
    <h1>Welcome to VUE shop</h1>
    <productsList></productsList>
  </div>
</template>

<script>
// @ is an alias to /src
import productsList from "@/components/productsList.vue";
export default {
  name: "home",
  data: function() {
    return {

    };
  },
  components: {
    productsList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  padding-top: 30px;
  padding-bottom: 40px;
}
</style>
