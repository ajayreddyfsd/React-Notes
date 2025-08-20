import { useNavigate } from "react-router-dom";

const NavigateButton = () => {
  const navigate = useNavigate();

  // Function recreated on every render
  const goToHome = () => {
    navigate("/home");
  };

  console.log("NavigateButton rendered");

  return (
    <div>
      <button onClick={goToHome}>Go to Home</button>
    </div>
  );
};

export default NavigateButton;
