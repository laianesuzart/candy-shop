import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  const findProduct = list.find((actual) => actual.id === product.id);
  if (!findProduct) {
    product.quantity += 1;
    list.push(product);
    dispatch(addToCart(product));
  } else {
    findProduct.quantity += 1;
  }
  localStorage.setItem("cart", JSON.stringify(list));
};

export const removeFromCartThunk = (id) => (dispatch, getStore) => {
  const { cart } = getStore();
  const list = cart.filter((product) => product.id !== id);
  const findProduct = cart.find((product) => product.id === id);

  findProduct.quantity = 0;
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(removeFromCart(list));
};
