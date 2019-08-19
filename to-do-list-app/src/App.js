import React, { Component } from "react";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import "./App.css";

export class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        body: "Clear the water"
      },
      {
        id: 2,
        body: "Aim high"
      },
      {
        id: 3,
        body: "Reach it"
      },
      {
        id: 4,
        body: "Manage there"
      }
    ]
  };

  // Add a new task 
  addTask = (someThingToDo) => {
    const newTask = {
      id: this.state.tasks.length  + 1,
      body: someThingToDo,
      isCompleted: false
    };

    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  // Delete a task 
  deleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter(elem => elem.id !== id)
    })
  }

  render() {
    return (
      <div className="container text-center">
        <h2>To Do App</h2>
        <AddTask addTask={this.addTask}/>
        <ul>
          {this.state.tasks.map(task => {
            return <Task key={task.id} task={task} deleteTask={this.deleteTask}/>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
