import React, { Component } from "react";
import Counter from './components/Counter';
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <Counter />
      </div>
    );
  }
}

export default App;
