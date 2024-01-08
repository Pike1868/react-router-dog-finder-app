import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DogDetails from "./DogDetails";
import dogs from "./dogs";

const mockDog = dogs[0];

//Smoke Test
test("DogDetails component renders without crashing for an existing dog", () => {
  render(
    <MemoryRouter>
      <DogDetails dog={mockDog} />
    </MemoryRouter>
  );
});

//Snapshot Test
test("DogDetails component matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <DogDetails dog={mockDog} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("DogDetails displays correct name", () => {
  render(
    <MemoryRouter>
      <DogDetails dog={mockDog} />
    </MemoryRouter>
  );
  const dogDetailsName = screen.getByText(`Meet ${mockDog.name}!`);
  expect(dogDetailsName).toBeInTheDocument();
});

test("displays image with correct src and alt text", () => {
  render(<DogDetails dog={mockDog} />);
  const image = screen.getByAltText(mockDog.name);
  expect(image).toBeInTheDocument();
  expect(image.src).toContain(mockDog.src);
});

test("displays all dog facts", () => {
  render(<DogDetails dog={mockDog} />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(mockDog.facts.length);
});
