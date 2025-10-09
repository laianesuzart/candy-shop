<script setup>
  import { formatPrice, calculateDiscount } from '@/utils/pricing'

  const props = defineProps({
    item: Object,
  })

  const emits = defineEmits(['increase', 'decrease', 'delete'])

  const handleDecrease = () => {
    if (props.item.quantity > 1) emits('decrease', props.item.id)
    else emits('delete', props.item.id)
  }

  const getItemTotal = () => formatPrice(props.item.price * props.item.quantity)
  const getItemDiscountTotal = () =>
    formatPrice(calculateDiscount(props.item.price, props.item.discount) * props.item.quantity)
</script>

<template>
  <v-list-item>
    <template #prepend>
      <v-img :src="item.image" width="60" height="60" class="rounded mr-4" />
    </template>

    <v-list-item-title>{{ item.name }}</v-list-item-title>

    <v-list-item-subtitle class="d-flex ga-2 align-center">
      <span :class="{ 'text-decoration-line-through text-caption': item.discount > 0 }">
        {{ getItemTotal() }}
      </span>
      <span v-if="item.discount > 0">{{ getItemDiscountTotal() }}</span>
    </v-list-item-subtitle>

    <div class="d-flex ga-4 mt-1 align-end">
      <div class="text-subtitle-2 d-inline-flex align-center border border-opacity-50 border-primary rounded-pill">
        <v-btn @click="handleDecrease" variant="text" :icon="item.quantity > 1 ? 'mdi-minus' : 'mdi-trash-can-outline'"
          size="small" />
        {{ item.quantity }}
        <v-btn @click="() => emits('increase', item)" variant="text" icon="mdi-plus" size="small" />
      </div>

      <v-btn @click="() => emits('delete', item.id)" variant="plain" size="small" slim :ripple="false"
        class="text-capitalize">
        Delete
      </v-btn>
    </div>
  </v-list-item>
</template>