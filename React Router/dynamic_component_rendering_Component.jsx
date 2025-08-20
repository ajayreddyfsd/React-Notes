import { useParams } from "react-router-dom";

// Step 1: Import all possible components
import Home from "./Home";
import About from "./About";
import UserProfile from "./UserProfile";
import NotFound from "./NotFound"; // Optional: 404 component

function DynamicComponent() {
  // Step 2: Map URL paths to components
  const componentMap = {
    home: Home,
    about: About,
    user: UserProfile,
  };

  //! Step 3: Extract dynamic part of URL (e.g., "home" from "/home")
  //! and based on that data, we decide what component to display
  const { pageName } = useParams();

  // Step 4: Select the component to render
  const ComponentToRender = componentMap[pageName];

  // Step 5: Handle invalid URLs (404)
  if (!ComponentToRender) {
    return <NotFound />; // or <h1>404 Not Found</h1>
  }

  // Step 6: Render the matched component
  return <ComponentToRender />;
}

export default DynamicComponent;
