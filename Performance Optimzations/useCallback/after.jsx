import { useState, useCallback } from "react";

// Child component
const Button = ({ onClick }) => {
  console.log("Button rendered"); // Only logs when function reference changes
  return <button onClick={onClick}>Click Me</button>;
};

const Counter = () => {
  const [count, setCount] = useState(0);

  //! Memorize the function using useCallback
  //! so it doesn't get re-rendered for every component re-render
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // empty dependency → function reference stays the same

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={increment} />
    </div>
  );
};

export default Counter;
