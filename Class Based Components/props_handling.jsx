// Props are the inputs to a React component.
// When you pass attributes to a component like <MyComponent name="Ajay" age={25} />,
// React combines them into a single object called 'props'.
// Inside the component, you access each value by its key, e.g., props.name or props.age.
// In JSX, use curly braces {} to insert these JavaScript values into the HTML-like code.


// In functional components: use props.key to access inputs
// In class components: use this.props.key instead
// because you're inside a class and 'this' refers to the current component instance


import React, { Component } from "react";

class MyClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
}

export default MyClassComponent;

