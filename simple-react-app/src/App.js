import React, { Component } from "react";
import Header from "./components/layout/Header";
import Aside from "./components/Aside";
import Details from "./components/Details";

export class App extends Component {
  state = {
    selectedItemId: 3,
    data: [
      {
        id: 1,
        name: 'Tylon',
        email: 'tylon@test.com',
        phone: '123412345',
        city: 'Chornai',
        state: 'Tamii Naoi',
        country: 'India',
        orgainsation: 'Company 3',
        jobProfile: 'Software Developer',
        additionalInfo: 'Buys Lots of Products in general'
      },
      {
        id: 2,
        name: 'Abdullah',
        email: 'abdullah@test.com',
        phone: '07777777',
        city: 'Amman',
        state: 'Amman',
        country: 'Jordan',
        orgainsation: 'Orange',
        jobProfile: 'Software Developer',
        additionalInfo: 'Loves cats'
      },
      {
        id: 3,
        name: 'Rand',
        email: 'rand@test.com',
        phone: '07700000',
        city: 'Amman',
        state: 'Amman',
        country: 'Jordan',
        orgainsation: 'Company 3',
        jobProfile: 'Software Developer',
        additionalInfo: 'Buys Lots of Products in general'
      },
    ]
  }

  handleClick = (id) => {
    this.setState({selectedItemId: id});
  }


  render() {
    return (
      <>
        <div className="container-fluid d-flex flex-column grow">
          <div className="row">
            <header className="col-12 px-0">
              <Header />
            </header>
            <aside className="col-4">
              {this.state.data.map(element => {
                return (<Aside key={element.id} info={element} selectItem={this.handleClick}/>)
              })}
              
            </aside>
            <div className="col-8 main">
              <Details info={this.state.data.filter(element => {
                return element.id === this.state.selectedItemId;
              })[0]}/>
            </div>
          </div>
          <footer />
        </div>
      </>
    );
  }
}

export default App;
