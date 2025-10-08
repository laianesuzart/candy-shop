<script setup>
  import { useCartStore } from '@/store/cart';

  const store = useCartStore();

  const breadcrumbItems = [
    {
      title: 'Home',
      disabled: false,
      href: '/',
    },
    {
      title: 'Cart',
      disabled: true,
      href: 'cart',
    },
  ];
  const formatPrice = (price) => {
    return price.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'USD',
    });
  } 
</script>

<template>
  <div>
    <h1 class="text-primary text-center pt-4 pb-2">Shopping Cart</h1>
    <v-breadcrumbs :items="breadcrumbItems">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
    <v-container>
      <v-row v-if="store.totalQuantity > 0">
        <v-col>
          <v-list lines="two" rounded="lg">
            <v-list-item v-for="item in store.items" :key="item.id">
              <template #prepend>
                <v-img :src="item.image" width="60" height="60" class="rounded mr-4" />
              </template>
              <v-list-item-title>
                {{ item.name }}
              </v-list-item-title>
              <div
                class="text-subtitle-2 d-inline-flex align-center border border-opacity-50 border-primary rounded-pill">
                <v-btn @click="[item.quantity > 1 ? store.decreaseItemQuantity(item.id) : store.deleteItem(item.id)]"
                  variant="text" :icon="item.quantity > 1 ? 'mdi-minus' : 'mdi-trash-can-outline'" size="small"></v-btn>
                {{ item.quantity }}
                <v-btn @click="store.addItem(item)" variant="text" icon="mdi-plus" size="small"></v-btn>
              </div>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-title>
              <span>Total: <span class="font-weight-bold">{{ formatPrice(store.totalPrice)
              }}</span></span>
            </v-card-title>
            <v-card-actions class="justify-center">
              <v-btn class="bg-primary" rounded="xl">Proceed to Checkout</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-sheet v-else class="py-4 px-2 rounded" elevation="3">
        <h2 class="text-primary">Your cart is empty</h2>
      </v-sheet>
    </v-container>
  </div>
</template>
