import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product, setTotal) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  const findProduct = list.find((actual) => actual.id === product.id);

  if (!findProduct) {
    product.quantity = 1;
    list.push(product);
    dispatch(addToCart(product));
  } else {
    findProduct.quantity += 1;
  }

  localStorage.setItem("cart", JSON.stringify(list));

  setTotal(list.reduce((acc, product) => acc + (product.price * product.quantity), 0));
};

export const removeFromCartThunk = (id, setTotal) => (dispatch) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const findProduct = cart.find((product) => product.id === id);
  const list = cart.filter((product) => product.id !== id);

  findProduct.quantity = 0;
  dispatch(removeFromCart(list));
  localStorage.setItem("cart", JSON.stringify(list));

  setTotal(list.reduce((acc, product) => acc + (product.price * product.quantity), 0));

};
