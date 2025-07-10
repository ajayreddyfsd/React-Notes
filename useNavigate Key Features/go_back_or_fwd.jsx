import { useNavigate } from "react-router-dom";

function NavigationButtons() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Go back one page in history */}
      <button onClick={() => navigate(-1)}>← Go Back</button>

      {/* Go forward one page in history */}
      <button onClick={() => navigate(1)}>Go Forward →</button>
    </div>
  );
}

export default NavigationButtons;
