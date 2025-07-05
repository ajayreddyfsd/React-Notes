import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props); // required to access this.props

    // state to track number of clicks
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    // props destructuring
    const { name, city } = this.props;

    return (
      <div>
        <h1>
          Hello, {name} from {city}!
        </h1>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.increment}>Click Me</button>
        <button onClick={() => this.increment()}>Click Me</button>
      </div>
    );
  }
}

export default UserGreeting;
