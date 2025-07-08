import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, // Step 1: Create a state variable
    };
  }

  // Step 2: A function to increase the count
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  /*
    ✅ componentDidUpdate
    - This method runs AFTER the component updates (not the first time, for the first time, CDM is triggered).
    - We get previous props and state as arguments automatically as prevProps, prevState .
    - Here, we check: did its props or state vars really change or no
    - then we do whatever is needed to do
    - in the below case, we are just storing the latest data of the state variable in the local storage
  */
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("savedCount", this.state.count); // write to localStorage
    }
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
