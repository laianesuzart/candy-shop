import { ADD_CART, REMOVE_CART } from "./actionsTypes";

export function addToCart(list) {
  return {
    type: ADD_CART,
    list,
  };
}

export function removeFromCart(list) {
  return {
    type: REMOVE_CART,
    list,
  };
}