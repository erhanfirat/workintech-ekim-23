import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { userReducer } from "./reducers/userReducer";
import { productReducer } from "./reducers/productReducer";
import { myLogger } from "./middleware/logger";
import { isLoggedIn } from "./middleware/isLoggedIn";
// eski versiyonlar için -> import { createStore } from 'redux';

export const reducers = combineReducers({
  user: userReducer,
  products: productReducer,
});

export const store = createStore(
  reducers,
  applyMiddleware(isLoggedIn, myLogger)
);
