// state is declared in the constructor
// state update methods are declared inside the class
// both state and state updating methods are accessed through this
// since code has state, we need to put props in the constructor, if not, then no

import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props); // needed because we use state

    this.state = {
      count: 0,
    };
  }

  //state updating method
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count is: {this.state.count}</p>

        {/* events passed to onClick */}
        <button onClick={this.increment}>Click Me</button>
        <button onClick={() => this.increment()}>Click Me</button>
      </div>
    );
  }
}

export default Counter;

// If you want to call the function immediately or pass arguments, use an arrow function:
//   onClick={() => this.someMethod()}

// If you just want to pass the function reference (no arguments), pass it directly:
//   onClick={this.someMethod}

// Since arrow functions bind 'this' automatically, passing the method directly works well
