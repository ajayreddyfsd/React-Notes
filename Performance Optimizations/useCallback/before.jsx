import { useState } from "react";

// Child component
const Button = ({ onClick }) => {
  console.log("Button rendered"); // Logs every time parent re-renders
  return <button onClick={onClick}>Click Me</button>;
};

const Counter = () => {
  const [count, setCount] = useState(0);

  //! Function that gets re-rendered for every component re-render
  //! Function that gets re-rendered for every component re-render
  //! Function that gets re-rendered for every component re-render
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={increment} />
    </div>
  );
};

export default Counter;
