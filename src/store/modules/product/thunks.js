import { addOneItem, removeOneItem } from "./actions";
import { removeFromCartThunk } from "../../modules/cart/thunks";

export const addOneItemThunk = (id, setTotal) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  const findProduct = list.find((product) => product.id === id);
  findProduct.quantity += 1;

  dispatch(addOneItem(list));
  localStorage.setItem("cart", JSON.stringify(list));
  setTotal(list.reduce((acc, product) => acc + (product.price * product.quantity), 0));
};

export const removeOneItemThunk = (id, setTotal) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  const findProduct = list.find((product) => product.id === id);

  if (findProduct.quantity === 1) {
    dispatch(removeFromCartThunk(id, setTotal));

  } else {
    findProduct.quantity -= 1;
    localStorage.setItem("cart", JSON.stringify(list));
    dispatch(removeOneItem(list));
    setTotal(list.reduce((acc, product) => acc + (product.price * product.quantity), 0));
  }
};
