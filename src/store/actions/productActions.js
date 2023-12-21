import { toast } from "react-toastify";
import { FetchStates, ProductActions } from "../reducers/productReducer";
import axios from "axios";

export const fetchProductsActionCreator = () => (dispatch, getState) => {
  // getState().product.fetchState
  dispatch({
    type: ProductActions.setProductFetchState,
    payload: FetchStates.fetching,
  });
  axios
    .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
    .then((res) => {
      dispatch({ type: ProductActions.setProductList, payload: res.data });
      dispatch({
        type: ProductActions.setProductFetchState,
        payload: FetchStates.fetched,
      });
      toast.success("Ürün datası başarıyla yüklendi!");
    })
    .catch((err) => {
      toast.error(
        "Ürün datası yüklenirken bir hata ile karşılaşıldı: " + err.message
      );
      dispatch({
        type: ProductActions.setProductFetchState,
        payload: FetchStates.failed,
      });
    });
};
