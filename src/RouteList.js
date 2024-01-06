import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import FilterDog from "./FilterDog";
import DogList from "./DogList";

/**
 * RouteList Component:
 *
 * Defines all routes for app
 * "/dogs": The homepage that displays all dogs using the DogList component.
 * - "/dogs/:name": A dynamic route for individual dogs, using the FilterDog component to find and display the requested dog's details.
 * - "/*": A catch-all route that redirects any paths not starting with "/dogs/" back to the homepage ("/dogs").
 *
 * Each dog route receives an array of dog objects as props
 */

const RouteList = ({ dogs }) => {
  console.log(dogs);
  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogs={dogs} />} />
      <Route exact path="/dogs/:name" element={<FilterDog dogs={dogs} />} />
      <Route path="/*" element={<Navigate to="/dogs" />} />
    </Routes>
  );
};

export default RouteList;
