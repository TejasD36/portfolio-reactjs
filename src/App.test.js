import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio introduction", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /hi! i'm tejas/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /skip to main content/i })).toBeInTheDocument();
});
