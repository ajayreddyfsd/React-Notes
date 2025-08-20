//need to import both useContext and the context we want to use
import { useContext } from "react";
import { UserContext } from "../contexts/user.context"; // adjust path as needed

const MyComponent = () => {
  const { currentUser } = useContext(UserContext);

  return (
    //can also use to display sign-in, sign-up and sign-out based on the currentUser is empty or not
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

