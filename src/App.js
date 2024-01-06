import "./App.css";
import dogsArr from "./dogs";
import RouteList from "./RouteList";
import NavBar from "./NavBar";

/**
 * App Component:
 * 
 * Top level component for the DogFinder application. Sets up the main structure of the application,
 * including the heading, the NavBar for navigation, and the RouteList which defines the routing logic. 
 */

function App() {
  return (
    <div className="App">
      <h1>Welcome to Dog Finder!</h1>
      <NavBar dogs={dogsArr} />
      <RouteList dogs={dogsArr} />
    </div>
  );
}

export default App;
