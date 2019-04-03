<template>
  <div>
    <button class="button" @click="fetch">test!</button>
    <p v-for="product in products" :key="product.id">{{ product.name }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    products: {
      type: Array,
      default: () => {}
    }
  },

  methods: {
    fetch() {
      this.$emit("fetch");
    }
  }
});
</script>
