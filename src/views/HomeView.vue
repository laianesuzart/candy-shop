<script setup>
  import ProductCard from '@/components/ProductCard.vue';
  import products from '@/data/products.json';
</script>

<style>
  .products-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
    gap: 20px;
    padding: 24px;
    list-style-type: none;
  }
</style>

<template>
  <div>
    <h1 class="text-primary text-center pt-4">The best treats</h1>
    <ul class="products-container">
      <li v-for="item in products" :key="item.id">
        <ProductCard :product="item" />
      </li>
    </ul>
  </div>
</template>
