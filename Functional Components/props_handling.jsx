// Props are the inputs to a React component.
// When you pass attributes to a component like <MyComponent name="Ajay" age={25} />,
// React combines them into a single object called 'props'.
// Inside the component, you access each value by its key, e.g., props.name or props.age.
// In JSX, use curly braces {} to insert these JavaScript values into the HTML-like code.


import React from "react";

function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
    </div>
  );
}

export default MyComponent;
