<script setup>
  import { useRouter } from 'vue-router';
  import { useCartStore } from '@/store/cart';
  import { calculateDiscount, formatPrice } from '@/utils/pricing';
  import { useToast } from '@/utils/useToast';

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
  const router = useRouter()
  const store = useCartStore();
  const { showToast } = useToast();

  const goToProduct = (productId) => {
    router.push(`/${productId}`);
  }
  const handleAddClick = (e, product) => {
    e.stopPropagation();
    store.addItem(product);
    showToast(`${product.name} has been added to your cart!`);
  }
  const hasStock = props.product.stock > 0;
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
  <v-card hover :disabled="!hasStock" @click="goToProduct(product.id)" :ripple="false">
    <span v-if="!hasStock" class="card__banner text-primary opacity-100">Out of stock</span>
    <v-img :src="product.image" :alt="product.name" height="200" />
    <v-card-title class="text-primary text-subtitle-1">
      {{ product.name }}
    </v-card-title>
    <v-card-text class="d-flex ga-2 align-center">
      <span :class="{ 'text-decoration-line-through opacity-60': product.discount > 0 }">{{ formatPrice(product.price)
        }}</span>
      <template v-if="product.discount > 0">
        <span> {{ formatPrice(calculateDiscount(product.price, product.discount)) }}</span>
        <span class="text-success text-caption font-weight-medium">{{ product.discount * 100 }}% OFF</span>
      </template>
    </v-card-text>
    <v-card-actions>
      <v-btn class="bg-primary" rounded="xl" block @click="handleAddClick($event, product)">Add to cart</v-btn>
    </v-card-actions>
  </v-card>
</template>
