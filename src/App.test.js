import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

//Smoke Test
test("App component renders without crashing", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});

//Snapshot Test
test("App component matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(asFragment()).toMatchSnapshot();
});


describe("App Component Tests", () => {
  // Common setup (e.g., rendering)
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  test("displays the correct heading", () => {
    const appHeading = screen.getByText("Welcome to Dog Finder!");
    expect(appHeading).toBeInTheDocument();
  });

  test("displays the NavBar", () => {
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  });

});