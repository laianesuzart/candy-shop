import {ADD_ITEM, REMOVE_ITEM} from './actionsTypes';

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

function productReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const { list } = action;
      return list;
    }

    case REMOVE_ITEM: {
      const { list } = action;
      return list;
    }

    default:
      return state;
  }
}

export default productReducer;