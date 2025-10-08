<script setup>
  import logo from '@/assets/logo.png';
  import { useCartStore } from '@/store/cart';

  const store = useCartStore();
</script>

<style>
  .logo {
    width: 160px;
    object-fit: contain;
  }
</style>

<template>
  <v-app-bar class="bg-white text-primary" scroll-behavior="hide" :elevation="0">
    <v-app-bar-title style="line-height: 0">
      <router-link to="/"><img :src="logo" alt="Candy Shop" class="logo" /></router-link>
    </v-app-bar-title>

    <router-link to="/cart" aria-label="Cart">
      <v-btn stacked color="primary">
        <v-badge :content="store.totalQuantity" color="primary">
          <v-icon>mdi-cart-variant</v-icon>
        </v-badge>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>
