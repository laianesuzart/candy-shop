<script setup>
  import { useCartStore } from '@/store/cart';
  import emptyCartImage from '@/assets/empty-cart.svg'
  import { formatPrice } from '@/utils/pricing';
  import CartItem from '@/components/CartItem.vue';

  const store = useCartStore();
</script>

<style>
  .list-item-transition-leave-active {
    transition: all 0.3s ease;
  }

  .list-item-transition-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
</style>

<template>
  <div>
    <h1 class="text-primary text-center pt-4 pb-2">Shopping Cart</h1>

    <v-container>
      <v-row>
        <router-link to="/" class="v-breadcrumbs-item--link text-body-2 opacity-50">
          <v-icon>mdi-chevron-left</v-icon>Home
        </router-link>
      </v-row>
      <v-row v-if="store.totalQuantity > 0">
        <v-col>
          <v-list lines="two" rounded="lg">
            <transition-group name="list-item-transition" tag="div">
              <template v-for="(item, index) in store.items" :key="item.id">
                <CartItem :item="item" @increase="store.addItem" @decrease="store.decreaseItemQuantity"
                  @delete="store.deleteItem" />
                <v-divider v-if="index < store.items.length - 1" />
              </template>
            </transition-group>
          </v-list>
        </v-col>
        <v-col cols="12" md="3">
          <v-card>
            <v-card-title class="d-flex ga-4 justify-md-space-between">
              <span>Total:</span><span class="font-weight-bold">{{ formatPrice(store.totalPrice)
                }}</span>
            </v-card-title>
            <v-card-actions class="justify-center">
              <v-btn class="bg-primary" rounded="xl" block>Checkout</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <template v-else>
        <v-row>
          <v-col>
            <v-sheet class="py-4 px-2 rounded text-center" elevation="3">
              <h2 class="text-primary">Your cart is empty</h2>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row class="mt-8">
          <v-img :src="emptyCartImage" aria-hidden="true" max-height="500"></v-img>
        </v-row>
      </template>
    </v-container>
  </div>
</template>
