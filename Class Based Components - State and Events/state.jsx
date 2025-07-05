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
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
