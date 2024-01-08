import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import FilterDog from "./FilterDog";
import DogList from "./DogList";
import dogs from "./dogs";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

//Smoke Test
test("FilterDog component renders without crashing for an existing dog", () => {
  useParams.mockReturnValue({ name: "whiskey" });
  useNavigate.mockReturnValue(jest.fn());

  render(
    <MemoryRouter initialEntries={[`/dogs/whiskey`]}>
      <FilterDog dogs={dogs} />
    </MemoryRouter>
  );
});

//Snapshot Test
test("FilterDog component matches snapshot", () => {
  useParams.mockReturnValue({ name: "whiskey" });
  useNavigate.mockReturnValue(jest.fn());

  const { asFragment } = render(
    <MemoryRouter initialEntries={[`/dogs/whiskey`]}>
      <FilterDog dogs={dogs} />
    </MemoryRouter>
  );

  expect(asFragment()).toMatchSnapshot();
});

// Test for existing dog
test("renders DogDetails for an existing dog", () => {
  useParams.mockReturnValue({ name: "whiskey" });
  useNavigate.mockReturnValue(jest.fn());

  render(
    <MemoryRouter initialEntries={[`/dogs/whiskey}`]}>
      <Routes>
        <Route path="/dogs/:name" element={<FilterDog dogs={dogs} />} />
      </Routes>
    </MemoryRouter>
  );
  expect(screen.getByText(`Meet Whiskey!`)).toBeInTheDocument();
});

// Test for non-existing dog
test("displays error message for a non-existing dog", () => {
  useParams.mockReturnValue({ name: "random" });
  useNavigate.mockReturnValue(jest.fn());

  render(
    <MemoryRouter initialEntries={[`/dogs/random`]}>
      <Routes>
        <Route path="/dogs/:name" element={<FilterDog dogs={dogs} />} />
        <Route path="/dogs" element={<DogList dogs={dogs} />} />
      </Routes>
    </MemoryRouter>
  );

  expect(
    screen.getByText(
      `No dog found with the name of random. Redirecting to all dogs....`
    )
  ).toBeInTheDocument();
});
