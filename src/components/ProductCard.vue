<script setup>
  import { useCartStore } from '@/store/cart';
  import { formatPrice } from '@/utils/pricing';
  import { calculateDiscount } from '../utils/pricing';

  const props = defineProps({
    product: {
      type: {
        id: Number,
        name: String,
        price: Number,
        image: String,
        quantity: Number,
      },
      required: true,
    },
  });

  const { image, name, price, discount, stock } = props.product;
  const store = useCartStore();
  const hasStock = stock > 0;
</script>

<style>
  .card__banner {
    position: absolute;
    z-index: 1;
    top: 8px;
    left: 8px;
    background-color: #141212;
    padding: 4px;
    border-radius: 4px;
    font-weight: bold;
  }
</style>

<template>
  <v-card hover :disabled="!hasStock">
    <span v-if="!hasStock" class="card__banner text-primary opacity-100">Out of stock</span>
    <v-img :src="image" :alt="name" height="200" />
    <v-card-title class="text-primary text-subtitle-1">
      {{ name }}
    </v-card-title>
    <v-card-text class="d-flex ga-2 align-center">
      <span :class="{ 'text-decoration-line-through opacity-60': discount > 0 }">{{ formatPrice(price) }}</span>
      <template v-if="discount > 0">
        <span> {{ formatPrice(calculateDiscount(price, discount)) }}</span>
        <span class="text-success text-caption font-weight-medium">{{ discount * 100 }}% OFF</span>
      </template>
    </v-card-text>
    <v-card-actions>
      <v-btn class="bg-primary" rounded="xl" block @click="store.addItem(props.product)">Add to cart</v-btn>
    </v-card-actions>
  </v-card>
</template>
