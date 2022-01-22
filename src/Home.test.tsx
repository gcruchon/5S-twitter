import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders login link", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Login with Twitter/i);
  expect(linkElement).toBeInTheDocument();
});
