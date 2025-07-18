// MyComponent.jsx
import { useContext } from "react";
import { UserContext } from "../contexts/user.context"; // adjust path as needed

const MyComponent = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      {currentUser ? (
        <p>Hello, {currentUser}</p>
      ) : (
        <p>No user signed in</p>
      )}
    </div>
  );
};

export default MyComponent;

