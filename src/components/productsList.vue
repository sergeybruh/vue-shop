<template>
  <div class="row">
    <div class="col-3" :key="item.id" v-for="item in getProductList">
      <div class="card" style="width: 18rem;">
        <img src="/prodimg.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ item.name }}</h5>
          <p class="card-text">Price {{ item.price }} UAH</p>
          <a
            href="#"
            @click="addToCart($event, item.id)"
            class="btn btn-primary"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productsList",
  props: {
    msg: String
  },
  computed: {
    getProductList() {
      return this.$store.state.productsList;
    }
  },
  methods: {
    addToCart(ev, id) {
      this.$store.commit("addToCart", id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
