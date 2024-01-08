import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DogList from "./DogList";
import dogs from "./dogs";

//Smoke Test
test("DogList component renders without crashing", () => {
  render(
    <MemoryRouter>
      <DogList dogs={dogs} />
    </MemoryRouter>
  );
});

//Snapshot Test
test("DogList component matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <DogList dogs={dogs} />
    </MemoryRouter>
  );

  expect(asFragment()).toMatchSnapshot();
});

describe("DogList Component Tests", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <DogList dogs={dogs} />
      </MemoryRouter>
    );
  });

  test("displays the heading message", () => {
    const headingMsg = screen.getByText(
      "HELLO. WE HAVE DOGS. CLICK ON THEM FOR MORE INFO."
    );
    expect(headingMsg).toBeInTheDocument();
  });

  //Dynamic dog link test
  dogs.forEach((dog) => {
    test(`displays a link for ${dog.name}`, () => {
      const whiskeyLink = screen.getByText("Whiskey");
      expect(whiskeyLink).toBeInTheDocument();
    });
  });

  test("displays images with correct alt text", () => {
    dogs.forEach((dog) => {
      const image = screen.getByAltText(dog.name);
      expect(image).toBeInTheDocument();
    });
  });
});
