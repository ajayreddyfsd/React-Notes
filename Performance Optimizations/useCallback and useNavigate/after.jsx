import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NavigateButton = () => {
  const navigate = useNavigate();

  // Memorize the function so it keeps the same reference
  const goToHome = useCallback(() => {
    navigate("/home");
  }, [navigate]); //! dependency: navigate //? need to pass this when putting inside useCallback or else error

  console.log("NavigateButton rendered");

  return (
    <div>
      <button onClick={goToHome}>Go to Home</button>
    </div>
  );
};

export default NavigateButton;
