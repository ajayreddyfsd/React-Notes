// Now you don’t need to write the word - props. before each one inside the component — you can use the keys directly.

import React, { Component } from "react";

class MyComponent extends Component {
  render() {
    const { name, age } = this.props;

    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>Age: {age}</p>
      </div>
    );
  }
}

export default MyComponent;
