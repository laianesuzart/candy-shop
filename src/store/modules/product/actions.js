import { ADD_ITEM, REMOVE_ITEM } from "./actionsTypes";

export function addOneItem(list) {
  return {
    type: ADD_ITEM,
    list,
  };
}

export function removeOneItem(list) {
  return {
    type: REMOVE_ITEM,
    list,
  };
}
