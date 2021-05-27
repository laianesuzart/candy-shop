import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product, setTotal) => (dispatch, getStore) => {
  const { cart } = getStore();
  const findProduct = cart.find((actual) => actual.id === product.id);

  if (!findProduct) {
    product.quantity = 1;
    cart.push(product);
  } else {
    findProduct.quantity += 1;
  }

  dispatch(addToCart(cart));

  localStorage.setItem("cart", JSON.stringify(cart));

  setTotal(
    cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
  );
};

export const removeFromCartThunk =
  (id, howMany, setTotal) => (dispatch, getStore) => {
    const { cart } = getStore();
    const findProduct = cart.find((product) => product.id === id);
    const list = cart.filter((product) => product.id !== id);

    if (findProduct.quantity === 1 || howMany === "removeAll") {
      findProduct.quantity = 0;
      dispatch(removeFromCart(list));
      localStorage.setItem("cart", JSON.stringify(list));
      setTotal(
        list.reduce((acc, product) => acc + product.price * product.quantity, 0)
      );
    } else {
      findProduct.quantity -= 1;
      dispatch(removeFromCart(cart));
      localStorage.setItem("cart", JSON.stringify(cart));
      setTotal(
        cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
      );
    }
  };
