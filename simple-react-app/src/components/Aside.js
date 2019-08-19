import React, { Component } from "react";
import  './Aside.css';

export class Aside extends Component {
  render() {
    const {name, email, phone} = this.props.info;

    return (
      <div className="wrapper">
        <div className="card text-center">
          <div className="card-header">{name}</div>
          <div className="card-body">
            <div className="card-text">
              <p>{email}</p>
              <p>{phone}</p>
            </div>
            <button 
                className="btn btn-primary"
                onClick={this.props.selectItem.bind(this, this.props.info.id)}
                >
                Click to View Details
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Aside;
