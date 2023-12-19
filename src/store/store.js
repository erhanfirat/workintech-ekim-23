import { combineReducers, legacy_createStore as createStore } from "redux";
import { userReducer } from "./reducers/userReducer";
import { productReducer } from "./reducers/productReducer";
// eski versiyonlar için -> import { createStore } from 'redux';

export const reducers = combineReducers({
  user: userReducer,
  products: productReducer,
});

export const store = createStore(reducers);
