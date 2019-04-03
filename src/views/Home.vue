<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductList from "@/components/PdroductList.vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "home",
  components: {
    ProductList
  },
  computed: mapState({
    products: state => state.ProductList.products,
  }),
  methods: {
    fetchProducts() {
      this.$store.dispatch("ProductList/FETCH_PRODUCTS");
    },

    getTotal(products) {
      return products.reduce((accum, current) => {
        accum + current;
      });
    },

    onclick() {
      console.log(this.$store);
    }
  }
});
</script>
