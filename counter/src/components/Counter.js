import React, { Component } from "react";
import Display from "./Display";
import Controls from "./Controls";

export class Counter extends Component {
  state = {
    interval: undefined,
    seconds: 0,
    minutes: 0,
    hours: 0
  };

  start = () => {
    const interval = setInterval(() => {
      if (this.state.minutes === 59) {
        this.setState({
          minutes: -1,
          hours: this.state.hours + 1
        });
      }

      if (this.state.seconds === 59) {
        this.setState({
          seconds: -1,
          minutes: this.state.minutes + 1
        });
      }

      this.setState({
        seconds: this.state.seconds + 1
      });
    }, 1000);

    this.setState({interval: interval})
  };

  stop = () => {
    clearInterval(this.state.interval);
  };

  rest = () => {
    this.setState({
      seconds: 0,
      minutes: 0,
      hours: 0
    });

    this.stop();
  };

  render() {
    return (
      <div className="wrapper">
        <h1 className="mb-3">Counter</h1>
        <Display currentTime={this.state} />
        <Controls start={this.start} stop={this.stop} rest={this.rest} />
      </div>
    );
  }
}

export default Counter;
