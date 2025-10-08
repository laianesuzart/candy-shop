import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  getters: {
    totalQuantity: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },
    totalPrice: (state) => {
      return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  actions: {
    addItem(product) {
      const item = this.items.find((i) => i.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
    decreaseItemQuantity(productId) {
      const item = this.items.find((i) => i.id === productId);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    deleteItem(productId) {
      this.items = this.items.filter((i) => i.id !== productId);
    },
  },
  persist: true,
});
