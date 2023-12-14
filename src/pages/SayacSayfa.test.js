import { fireEvent, render, screen } from "@testing-library/react";
import SayacSayfa from "./SayacSayfa";
import LoginPage from "./LoginPage";

test("Yumurta Sepeti toggle test", () => {
  // Arrange
  render(
    <div className="container">
      <SayacSayfa PI={3.1415} />
    </div>
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
  render(<SayacSayfa PI={3.1415} />);

  const artBtn = screen.getByTestId("counter-arttir-btn");
  fireEvent.click(artBtn);
  fireEvent.click(artBtn);
  fireEvent.click(artBtn);

  const cd = screen.getByTestId("counter-display");
  expect(cd).toHaveTextContent("3");
});

test("Sepete Ekle > sayaç eksi değer alamaz", () => {
  render(<SayacSayfa PI={3.1415} />);

  const azlBtn = screen.getByTestId("azalt-artis");
  fireEvent.click(azlBtn);
  fireEvent.click(azlBtn);
  fireEvent.click(azlBtn);
  fireEvent.click(azlBtn);
  fireEvent.click(azlBtn);
  fireEvent.click(azlBtn);

  expect(screen.getByTestId("artis-miktari")).toHaveTextContent("0");
});
