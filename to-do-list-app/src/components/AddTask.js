import React, { Component } from "react";

export class AddTask extends Component {
  addTask = e => {
    e.preventDefault();

    var newTask = this.inputField.value;
    if (newTask) this.props.addTask(newTask);

    this.inputField.value = '';
  };

  render() {
    return (
      <form className="form-group form-inline d-flex justify-content-center">
        <input
          className="form-control"
          type="text"
          placeholder="Add new task"
          ref={elem => (this.inputField = elem)}
        />

        <input
          className="btn btn-info"
          type="submit"
          value="+"
          onClick={this.addTask}
        />
      </form>
    );
  }
}

export default AddTask;
