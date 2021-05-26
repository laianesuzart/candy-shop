import { ADD_CART, REMOVE_CART } from "./actionsTypes";

export function addToCart(product) {
  return {
    type: ADD_CART,
    product,
  };
}

export function removeFromCart(list) {
  return {
    type: REMOVE_CART,
    list,
  };
}