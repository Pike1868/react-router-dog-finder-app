import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DogDetails from "./DogDetails";

/**
 * FilterDog Component:
 * 
 * Responsible for determining if the requested dog exists based on URL parameter
 * If dog exists, renders the DogDetails component with the found dog's data.
 * If dog does NOT exist, uses a timer to display an error message, then redirects back to the DogList component
 * 
 * Props:
 * - dogs (array): Array of dog objects
 *
 * State:
 * - redirect (boolean): Controls the display of the redirect message and the initiation of redirection.
 */

const FilterDog = ({ dogs }) => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [redirect, setRedirect] = useState(false);

  const existingDog = dogs.find(
    (d) => d.name.toLowerCase() === name.toLowerCase()
  );

  useEffect(() => {
    if (!existingDog) {
      const timer = setTimeout(() => {
        navigate("/dogs");
      }, 3000);
      setRedirect(true);
      return () => clearTimeout(timer);
    }
  }, [name, existingDog, navigate]);

  if (redirect) {
    return (
      <p>
        No dog found with the name of <strong>{name}</strong>. Redirecting to
        all dogs....
      </p>
    );
  }

  if (existingDog) {
    return <DogDetails dog={existingDog} />;
  }
};

export default FilterDog;
