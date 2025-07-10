import React from "react";

class GreetingCC extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("h1", null, "Hello, ", this.props.name),
      React.createElement("p", null, "Count: ", this.state.count),
      React.createElement(
        "button",
        { onClick: () => this.setState({ count: this.state.count + 1 }) },
        "Increment"
      )
    );
  }
}

// Usage: React.createElement(GreetingCC, { name: 'World' });
