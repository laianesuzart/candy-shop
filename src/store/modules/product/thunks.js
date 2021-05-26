import { addOneItem, removeOneItem } from "./actions";
import { removeFromCartThunk } from "../../modules/cart/thunks";

export const addOneItemThunk = (id) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  const findProduct = list.find((product) => product.id === id);
  findProduct.quantity += 1;

  dispatch(addOneItem(list));
  localStorage.setItem("cart", JSON.stringify(list));
};

export const removeOneItemThunk = (id) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  const findProduct = list.find((product) => product.id === id);

  if (findProduct.quantity === 1) {
    dispatch(removeFromCartThunk(id));
  } else {
    findProduct.quantity -= 1;
    localStorage.setItem("cart", JSON.stringify(list));
    dispatch(removeOneItem(list));
  }
};
