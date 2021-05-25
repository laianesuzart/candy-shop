import { ADD_CART } from "./actionsTypes";

export function addToCart(product) {
  return {
    type: ADD_CART,
    product,
  };
}
