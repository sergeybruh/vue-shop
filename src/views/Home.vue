<template>
  <div class="home container">
    <h1>Welcome to VUE shop</h1>
    <productsList  />
  </div>
</template>

<script>
// @ is an alias to /src
import productsList from "@/components/productsList.vue";

export default {
  name: "home",
  components: {
    productsList
  }
};
</script>
