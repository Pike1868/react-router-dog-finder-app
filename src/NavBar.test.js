import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";
import dogs from "./dogs";

//Smoke Test
test("NavBar component renders without crashing", () => {
  render(
    <MemoryRouter>
      <NavBar dogs={dogs} />
    </MemoryRouter>
  );
});

//Snapshot Test
test("NavBar component matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <NavBar dogs={dogs} />
    </MemoryRouter>
  );

  expect(asFragment()).toMatchSnapshot();
});

describe("NavBar Component Tests", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NavBar dogs={dogs} />
      </MemoryRouter>
    );
  });

  test("displays the home link", () => {
    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
  });

  test("displays a dog link", () => {
    const whiskeyLink = screen.getByText("Whiskey");
    expect(whiskeyLink).toBeInTheDocument();
  });
});
