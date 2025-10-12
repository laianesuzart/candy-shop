<script setup>
  import { useRoute } from 'vue-router';
  import { ref } from 'vue';

  import NotFoundView from '@/views/NotFoundView.vue';
  import products from '@/data/products.json';
  import { useCartStore } from '@/store/cart';
  import { useToast } from '@/utils/useToast';
  import { calculateDiscount, formatPrice } from '@/utils/pricing';

  const route = useRoute();
  const store = useCartStore();
  const { showToast } = useToast();

  const product = ref(null);
  const hasDiscount = ref(false);
  const finalPrice = ref(null);
  const selectedQuantity = ref(1);
  const quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const selectedProduct = products.find((p) => String(p.id) === String(route.params.productId));
  if (selectedProduct) {
    product.value = selectedProduct;
    hasDiscount.value = selectedProduct.discount > 0;
    finalPrice.value = hasDiscount.value
      ? calculateDiscount(selectedProduct.price, selectedProduct.discount)
      : selectedProduct.price;
  }

  const handleAddClick = () => {
    store.addItem(product.value, selectedQuantity.value);
    showToast(`${product.value.name} has been added to your cart!`);
  }
</script>

<template>
  <v-container v-if="product" class="pt-8">
    <v-row>
      <button @click="$router.back" class="v-breadcrumbs-item--link text-body-2 opacity-50">
        <v-icon>mdi-chevron-left</v-icon>Go back
      </button>
    </v-row>
    <v-row class="bg-white rounded pa-sm-2 pa-2 pa-sm-6 mt-6">
      <v-col cols="12" md="6"><v-img :src="product.image" height="400" /></v-col>
      <v-col>
        <v-sheet rounded class="pa-4 border border-primary fill-height">
          <h1 class="text-primary text-h5 pb-2">{{ product.name }}</h1>
          <div>
            <span v-if="hasDiscount" class="text-decoration-line-through opacity-50 pl-1">{{
              formatPrice(product.price)
            }}</span>
            <div class="d-flex ga-2 align-center">
              <span class="text-h4">{{ formatPrice(finalPrice) }}</span>
              <span v-if="hasDiscount" class="text-h6 text-success font-weight-medium">{{ product.discount * 100 }}%
                OFF</span>
            </div>
          </div>
          <p class="pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nulla iste architecto
            vitae cumque reiciendis, eius sed perspiciatis itaque libero maxime ipsa officia, quos
            inventore tenetur nostrum repellat ea error?
          </p>
          <v-container class="px-0">
            <v-row>
              <v-col cols="12" sm="6">
                <v-select :items="quantityOptions" density="compact" variant="outlined" hide-details="true"
                  prefix="Quantity: " v-model="selectedQuantity"></v-select>
              </v-col>
              <v-col>
                <v-btn @click="handleAddClick" :disabled="product.stock < 1" class="bg-primary" rounded="xl" block>Add
                  to cart</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
  <NotFoundView v-else />
</template>
