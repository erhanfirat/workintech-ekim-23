import { act, fireEvent, render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import userEvent from "@testing-library/user-event";

test("Login Form Render Test", () => {
  render(<LoginPage />);

  screen.debug();
});

test("Login Form fill and submit", () => {
  render(<LoginPage />);

  act(() => {
    userEvent.type(screen.getByTestId("user-email-input"), "ali@ali.com");
    userEvent.type(screen.getByTestId("user-pass-input"), "123456");
  });

  expect(screen.getByTestId("user-email-input")).toHaveValue("ali@ali.com");
  expect(screen.getByTestId("user-pass-input")).toHaveValue("123456");

  fireEvent.click(screen.getByTestId("login-submit-btn"));
});
