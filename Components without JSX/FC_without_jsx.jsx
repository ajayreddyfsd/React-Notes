import React, { useState, useEffect } from "react";

function GreetingFC(props) {
  const [count, setCount] = useState(0);

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello, ", props.name),
    React.createElement("p", null, "Count: ", count),
    React.createElement(
      "button",
      { onClick: () => setCount(count + 1) },
      "Increment"
    )
  );
}

// Usage: React.createElement(GreetingFC, { name: 'World' });
