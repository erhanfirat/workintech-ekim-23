import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

import "bootstrap/dist/css/bootstrap.min.css";
import { CounterContextProvider } from "./context/CounterContext";
import { SettingsContextProvider } from "./context/SettingsContext";
import { ProductContextProvider } from "./context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* React Router DOM Provider component*/}
      <CounterContextProvider>
        <SettingsContextProvider>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </SettingsContextProvider>
      </CounterContextProvider>
    </BrowserRouter>
  </Provider>
);
