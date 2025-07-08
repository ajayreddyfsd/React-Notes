import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // ✅ componentDidMount runs automatically after component is shown on screen
  // ✅ we use it to do things like fetch data, start timers, etc.
  // ✅ here, we fake-fetch the name after 1 second
  // ✅ we update the state using setState()
  // ✅ that triggers re-render, and now the name is shown on the screen
  componentDidMount() {
    // Simulating API call
    setTimeout(() => {
      const fetchedName = "Ajay"; // pretend we got this from server
      this.setState({ name: fetchedName });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name || "loading..."}</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
