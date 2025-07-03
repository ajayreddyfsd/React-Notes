// React components can have state variables to store data that can change over time.
// We create a state variable using useState hook, like:
//   const [count, setCount] = useState(0);
// Here, count is the current value, initially 0,
// and setCount is the function to update count.

// Important: Do NOT change the state variable directly like count = 5,
// because React won’t know and won’t update the UI.

// Instead, always use the setter function like setCount(5)
// to update the value and tell React to re-render the component.




import React, { useState } from "react";

function Counter() {
  // Step 2a: Declare a state variable count with initial value 0
  const [count, setCount] = useState(0);

  // Step 2b: Return JSX showing count and a button to increment it
  return (
    <div>
      <p>Count is: {count}</p>
      <button>Increment</button>
    </div>
  );
}

export default Counter;
