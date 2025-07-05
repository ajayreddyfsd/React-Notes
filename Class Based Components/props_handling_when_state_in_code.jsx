import React, { Component } from "react";

class GreetCounter extends Component {
  constructor(props) {
    super(props); // needed to use this.props

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>Clicked {this.state.count} times</p>
        <button onClick={this.increment}>Click Me</button>
      </div>
    );
  }
}

export default GreetCounter;
