// A functional component is just a JavaScript function.
// It returns JSX, which tells React what to render on the screen.
// By convention, the function name should be PascalCase-capitalized and first letter capital too like MyComponent.
// if first letter is smallcase, react thinks the tag is the usual html tag instead of as custom react component tag

import React from "react";

function MyComponent() {
  return (
    <div>
      <h1>Hello from MyComponent!</h1>
    </div>
  );
}

export default MyComponent;




