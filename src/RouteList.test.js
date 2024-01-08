import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import RouteList from "./RouteList";
import dogs from "./dogs";

const MockDogList = () => <div>DogList Component</div>;
const MockFilterDog = () => <div>FilterDog Component</div>;

test("renders DogList at the '/dogs' route", () => {
  render(
    <MemoryRouter initialEntries={["/dogs"]}>
      <Routes>
        <Route path="/dogs" element={<MockDogList />} />
      </Routes>
    </MemoryRouter>
  );
  expect(screen.getByText("DogList Component")).toBeInTheDocument();
});

test("renders FilterDog at a '/dogs/:name' route", () => {
  render(
    <MemoryRouter initialEntries={["/dogs/whiskey"]}>
      <Routes>
        <Route path="/dogs/:name" element={<MockFilterDog />} />
      </Routes>
    </MemoryRouter>
  );
  expect(screen.getByText("FilterDog Component")).toBeInTheDocument();
});

test("redirects to '/dogs' when visiting a non-matching route", () => {
  render(
    <MemoryRouter initialEntries={["/random"]}>
      <RouteList dogs={dogs} />
    </MemoryRouter>
  );

  // Checking redirection to home page by correct heading
  expect(
    screen.getByText("HELLO. WE HAVE DOGS. CLICK ON THEM FOR MORE INFO.")
  ).toBeInTheDocument();
});
