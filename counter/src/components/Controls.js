import React, { Component } from "react";

export class Controls extends Component {
  render() {
    const { start, stop, rest } = this.props;

    return (
      <div>
        <button onClick={start} type="button" className="btn btn-light m-1">
          START
        </button>
        <button onClick={stop} type="button" className="btn btn-light m-1">
          STOP
        </button>
        <button onClick={rest} type="button" className="btn btn-light m-1">
          REST
        </button>
      </div>
    );
  }
}

export default Controls;
