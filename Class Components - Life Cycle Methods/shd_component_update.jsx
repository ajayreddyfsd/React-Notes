import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    // We try to increase count, even if it's already same
    this.setState({ count: this.state.count });
  };

  // Whenever a component's state or props change, React wants to re-render it.
  // But before doing that, if there's a method called shouldComponentUpdate,
  // React calls it automatically and passes the next props and next state to it.

  // This method acts like a checkpoint/decision-maker.
  // It compares the new props/state (nextProps, nextState) with the current ones (this.props, this.state).

  // Based on the return value:
  // - true  → React re-renders the component.
  // - false → React skips re-rendering to save performance.

  // So yes — it's React's way of double-checking with YOU before updating the UI.

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count === this.state.count) {
      console.log("❌ No re-render needed");
      return false; // Skip re-render
    }
    console.log("✅ Allow re-render");
    return true; // Allow re-render
  }

  render() {
    console.log("🔁 Rendered");
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <button onClick={this.increment}>Try Same Value</button>
      </div>
    );
  }
}

export default MyComponent;
