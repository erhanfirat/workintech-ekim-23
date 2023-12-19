export const FetchStates = {
  notFetched: "NOT_FETCHED",
  fetching: "FETCHING",
  fetched: "FETCHED",
  failed: "FETCH_FAILED",
};

export const ProductActions = {
  setProductList: "SET_PRODUCT_LIST",
  setProductFetchState: "SET_PRODUCT_FETCH_STATE",
};

const productInitial = {
  list: [],
  count: 0,
  page: 0,
  pageSize: 25,
  fetchState: FetchStates.notFetched, //  "NOT_FETCED" | "FETCHING" | "FETCHED" | "FETCH_FAILED"
};

export const productReducer = (state = productInitial, action) => {
  switch (action.type) {
    case ProductActions.setProductList:
      return { ...state, list: action.payload };
      break;

    case ProductActions.setProductFetchState:
      return { ...state, fetchState: action.payload };
      break;

    default:
      return state;
      break;
  }
};
