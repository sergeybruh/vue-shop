<template>
  <div class="about container">
    <h1 class="myTitle">This is list of products you've added to cart</h1>
  
    <div class="about row">
      <div class="col-3" v-for="item in getProductList">
        <div class="card" style="width: 100%">
        <img src="/prodimg.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{item.name}}</h5>
          <p class="card-text">Price {{item.price}} UAH {{item.amount}}X</p>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" @click="addOne($event, item.id)" class="btn btn-secondary">+</button>
            <button type="button" @click="removeOne($event, item.id)" class="btn btn-secondary">-</button>
          </div>
          <br>
          </br>
          <a href="#" @click="removeFromCart($event, item.id)" class="btn btn-primary">delate</a>
        </div>
      </div>
      </div>
      
    </div>
    <br>
    <div class="row">
      <div class="col-12">
        <h1>Total amount <span class="badge badge-secondary">{{totalAmount}} UAH</span></h1>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "cart",
  props: {
    msg: String
  },
  computed: {
      getProductList() {
        return this.$store.state.cartObj;
      },
      totalAmount() {
        let totAmount = 0;
        this.$store.state.cartObj.forEach((el, i)=> {
          totAmount = totAmount + (el.price * el.amount);
        });
        return totAmount;
      }
  },
  methods: {
    removeFromCart(ev, id) {
      this.$store.commit('removeFromCart', id);
    },
    addOne(ev, id) {
      this.$store.commit('addOne', id);
    },
    removeOne(ev, id) {
      this.$store.commit('removeOne', id);
    },
  }
};
</script>

<style>
.myTitle {
  padding-top: 20px;
  padding-bottom: 30px;
}
</style>



