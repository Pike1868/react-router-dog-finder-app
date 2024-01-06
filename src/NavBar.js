import { NavLink } from "react-router-dom";

/**
 *
 * NavBar Component:
 *
 * Returns a navigation bar with each dog object listed as a NavLink component. allowing
 * users to click on a dog's name and navigate to the route displaying that dog's details.
 * Also includes a link to the home route ("/dogs") that directs users back
 * to the main list of all dogs.
 *
 * Props:
 * - dogs (array): An array of objects representing the dogs, used to generate navigation links.
 *
 */

function NavBar({ dogs }) {
  const links = dogs.map((dog) => (
    <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
      {dog.name}
    </NavLink>
  ));

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "lightblue",
        padding: "10px",
      }}
    >
      <NavLink to="/dogs" end>
        Home
      </NavLink>
      {links}
    </nav>
  );
}

export default NavBar;
