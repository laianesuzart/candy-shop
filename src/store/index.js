import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./modules/products/reducer";
import cartReducer from "./modules/cart/reducer";
import productReducer from './modules/product/reducer';

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  product: productReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
