import React, { useState } from "react";

function Counter() {
  // Step 2a: Declare a state variable count with initial value 0
  const [count, setCount] = useState(0);

    function update(count) {
        setCount(count+1)
    }
  // Step 2b: Return JSX showing count and a button to increment it
  return (
    <div>
      <p>Count is: {count}</p>
      <button onClick={update(count)}>Increment</button>
    </div>
  );
}

export default Counter;