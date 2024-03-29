import { toast } from "react-toastify";
import { FetchStates, ProductActions } from "../reducers/productReducer";
import { API } from "../../api/api";

export const fetchProductsActionCreator = () => (dispatch, getState) => {
  // getState().product.fetchState
  dispatch({
    type: ProductActions.setProductFetchState,
    payload: FetchStates.fetching,
  });
  API.get("/products")
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

export const deleteProductAction = (productId) => (dispatch, getState) => {
  API.delete("/products/" + productId)
    .then((res) => {
      console.log("ürün silindi: ", res.data);
      // fetchProducts();
      dispatch(fetchProductsActionCreator());
    })
    .catch((err) => {
      console.log("ürün silinirken bir hata ile karşılaşıldı: ", err);
    });
};
