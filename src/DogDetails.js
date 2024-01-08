import React from "react";

/**
 * DogDetails Component:
 * Displays detail information about a single dog
 *
 * Props:
 * - dog (object): Dog object containing details like name and image source.
 */

const DogDetails = ({ dog }) => {
  return (
    <div>
      <h2>Meet {dog.name}!</h2>
      <div className="col-3 text-center" key={dog.name}>
        <img src={`/${dog.src}.jpg`} alt={dog.name} />
      </div>
      <ul>
        {dog.facts.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogDetails;
