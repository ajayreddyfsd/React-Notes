import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
    this.timer = null;
  }

  componentDidMount() {
    // Start a timer that updates every second
    this.timer = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  //   This lifecycle method runs just before the component is removed from the screen — great for cleanup like:
  //   Clearing timers
  //   Unsubscribing from events
  //   Removing listeners
  componentWillUnmount() {
    // Clearing the timer which was started once this comp was mounted
    clearInterval(this.timer);
    console.log("⛔ Timer cleared, component unmounted");
  }

  render() {
    return (
      <div>
        <h1>Timer: {this.state.seconds} sec</h1>
      </div>
    );
  }
}

export default MyComponent;
