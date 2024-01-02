import { fireEvent, render, screen } from "@testing-library/react";
import SayacSayfa from "./SayacSayfa";
import { CounterContextProvider } from "../context/CounterContext";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { BrowserRouter } from "react-router-dom";
import { SettingsContextProvider } from "../context/SettingsContext";
import { ProductContextProvider } from "../context/ProductContext";

test("Yumurta Sepeti toggle test", () => {
  // Arrange
  render(
    <Provider store={store}>
      <BrowserRouter>
        {/* React Router DOM Provider component*/}
        <CounterContextProvider>
          <SettingsContextProvider>
            <ProductContextProvider>
              <div className="container">
                <SayacSayfa PI={3.1415} />
              </div>
            </ProductContextProvider>
          </SettingsContextProvider>
        </CounterContextProvider>
      </BrowserRouter>
    </Provider>
  );

  screen.debug();

  // Action
  const tglBtn = screen.getByTestId("counter-toggle-btn");
  fireEvent.click(tglBtn);

  // Assertion
  const cc = screen.queryByTestId("counter-card");
  expect(cc).toEqual(null);
});

test("Sepete ekle testi", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {/* React Router DOM Provider component*/}
        <CounterContextProvider>
          <SettingsContextProvider>
            <ProductContextProvider>
              <div className="container">
                <SayacSayfa PI={3.1415} />
              </div>
            </ProductContextProvider>
          </SettingsContextProvider>
        </CounterContextProvider>
      </BrowserRouter>
    </Provider>
  );

  const artBtn = screen.getByTestId("counter-arttir-btn");
  fireEvent.click(artBtn);
  fireEvent.click(artBtn);
  fireEvent.click(artBtn);

  const cd = screen.getByTestId("counter-display");
  expect(cd).toHaveTextContent("3");
});

test("Sepete Ekle > sayaç eksi değer alamaz", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        {/* React Router DOM Provider component*/}
        <CounterContextProvider>
          <SettingsContextProvider>
            <ProductContextProvider>
              <div className="container">
                <SayacSayfa PI={3.1415} />
              </div>
            </ProductContextProvider>
          </SettingsContextProvider>
        </CounterContextProvider>
      </BrowserRouter>
    </Provider>
  );

  const azlBtn = screen.getByTestId("azalt-artis");
  fireEvent.click(azlBtn);
  fireEvent.click(azlBtn);
  fireEvent.click(azlBtn);
  fireEvent.click(azlBtn);
  fireEvent.click(azlBtn);
  fireEvent.click(azlBtn);

  expect(screen.getByTestId("artis-miktari")).toHaveTextContent("0");
});
