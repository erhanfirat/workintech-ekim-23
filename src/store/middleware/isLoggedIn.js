import { ProductActions } from "../reducers/productReducer";

export const isLoggedIn = (store) => (next) => (action) => {
  // kontrol yapıp işlem iptal ettirebilirim
  if (
    action.type === ProductActions.setProductList &&
    !store.getState().user.email
  ) {
    // no next
    console.log("Bu işlem için login olmalısınız");
  } else {
    next(action);
  }
};
