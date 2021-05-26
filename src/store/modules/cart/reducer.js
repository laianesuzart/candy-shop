import { ADD_CART, REMOVE_CART } from "./actionsTypes";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;
      return [...state, product];

    case REMOVE_CART:
      const { list } = action;
      return list;

    default:
      return state;
  }
}

export default cartReducer;
