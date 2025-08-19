import { useCallback } from "react";

const Button = ({ multiplier, onClick }) => (
  <button onClick={onClick}>Multiply</button>
);

const Parent = ({ multiplier }) => {
  // ✅ Function depends on the prop 'multiplier'
  const handleClick = useCallback(() => {
    console.log("Result:", multiplier * 2);
  }, [multiplier]); // dependency array includes multiplier

  return <Button onClick={handleClick} />;
};

export default Parent;
