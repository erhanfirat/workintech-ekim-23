import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

import { CounterContextProvider } from "./context/CounterContext";
import { SettingsContextProvider } from "./context/SettingsContext";
import { ProductContextProvider } from "./context/ProductContext";

test("renders learn react link", () => {
  render(
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
});
