import React, { Component } from "react";
import "./Display.css";

export class Display extends Component {
  render() {
    const { hours, minutes, seconds } = this.props.currentTime;

    return (
      <h1 className="display">
        {`${hours === 0 ? "00" : hours < 10 ? "0" + hours : hours}
         : ${minutes === 0 ? "00" : minutes < 10 ? "0" + minutes : minutes}
         : ${seconds === 0 ? "00" : seconds < 10 ? "0" + seconds : seconds}`}
      </h1>
    );
  }
}

export default Display;
