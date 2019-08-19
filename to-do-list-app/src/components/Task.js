import React, { Component } from "react";

export class Task extends Component {
  render() {
    const { id, body } = this.props.task;
    const { deleteTask } = this.props;

    return (
      <li>
        {body}
        <button
          className="btn btn-sm btn-outline-danger float-right"
          type="button"
          onClick={deleteTask.bind(this, id)}
        >
          X
        </button>
      </li>
    );
  }
}

export default Task;
