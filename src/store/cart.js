import { defineStore } from 'pinia';
import { calculateDiscount } from '../utils/pricing';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  getters: {
    totalQuantity: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },
    totalPrice: (state) => {
      return state.items.reduce((total, item) => {
        const price = item.discount ? calculateDiscount(item.price, item.discount) : item.price;
        return total + price * item.quantity;
      }, 0);
    },
  },
  actions: {
    addItem(product, quantity = 1) {
      const item = this.items.find((i) => i.id === product.id);
      if (item) {
        item.quantity += quantity;
      } else {
        this.items.push({ ...product, quantity });
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
