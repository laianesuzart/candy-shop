<script setup>
  import { useCartStore } from '@/store/cart';

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

  const { image, name, price } = props.product;
  const formattedPrice = price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'USD',
  });
  const store = useCartStore()
</script>

<template>
  <v-card hover>
    <v-img :src="image" :alt="name" height="200" />
    <v-card-title class="text-primary">
      {{ name }}
    </v-card-title>
    <v-card-text>
      {{ formattedPrice }}
    </v-card-text>
    <v-card-actions>
      <v-btn class="bg-primary" rounded="xl" block @click="store.addItem(props.product)">Add to cart</v-btn>
    </v-card-actions>
  </v-card>
</template>
