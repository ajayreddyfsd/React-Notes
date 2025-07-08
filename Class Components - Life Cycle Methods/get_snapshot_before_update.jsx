import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  increase = () => {
    this.setState({ number: this.state.number + 1 });
  };

  //   mostly used when you need to:
  //   Handle scroll positions, Track visual/layout changes, Sync animations, Log or compare before-and-after values
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // This runs just before the DOM is updated
    console.log("🟡 Before Update - Previous number:", prevState.number);
    return prevState.number; // pass old value to next method
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // This runs after the DOM update
    console.log("🟢 After Update - New number:", this.state.number);
    console.log("📦 Snapshot received:", snapshot);
  }

  render() {
    return (
      <div>
        <h1>Number: {this.state.number}</h1>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

export default MyComponent;
