<script setup>
  import { useCartStore } from '@/store/cart';
  import emptyCartImage from '@/assets/empty-cart.svg'

  const store = useCartStore();

  const formatPrice = (price) => {
    return price.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'USD',
    });
  } 
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
                <v-list-item>
                  <template #prepend>
                    <v-img :src="item.image" width="60" height="60" class="rounded mr-4" />
                  </template>
                  <v-list-item-title>
                    {{ item.name }}
                  </v-list-item-title>
                  <div class="d-flex ga-4 align-end">
                    <div
                      class="text-subtitle-2 d-inline-flex align-center border border-opacity-50 border-primary rounded-pill">
                      <v-btn
                        @click="[item.quantity > 1 ? store.decreaseItemQuantity(item.id) : store.deleteItem(item.id)]"
                        variant="text" :icon="item.quantity > 1 ? 'mdi-minus' : 'mdi-trash-can-outline'"
                        size="small"></v-btn>
                      {{ item.quantity }}
                      <v-btn @click="store.addItem(item)" variant="text" icon="mdi-plus" size="small"></v-btn>
                    </div>
                    <v-btn @click="store.deleteItem(item.id)" variant="plain" size="small" slim :ripple="false"
                      class="text-capitalize">Delete</v-btn>
                  </div>
                </v-list-item>
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
