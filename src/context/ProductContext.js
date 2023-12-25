import { createContext, useReducer } from "react";

export const ProductContext = createContext();

const productsReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.payload;

    case "CLEAR_PRODUCTS":
      return [];

    default:
      return state;
  }
};

export const ProductContextProvider = ({ children }) => {
  const [products, dispatchProducts] = useReducer(productsReducer, []);

  return (
    <ProductContext.Provider value={{ products, dispatchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
