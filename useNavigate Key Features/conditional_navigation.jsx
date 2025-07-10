import { useNavigate } from "react-router-dom";

function ProtectedPageButton() {
  const navigate = useNavigate();
  const isLoggedIn = false; // Replace with actual auth check

  const handleAccess = () => {
    // Navigate based on condition
    if (isLoggedIn) {
      navigate("/members-only");
    } else {
      navigate("/login");
    }
  };

  return <button onClick={handleAccess}>Try Accessing Members Area</button>;
}

export default ProtectedPageButton;
