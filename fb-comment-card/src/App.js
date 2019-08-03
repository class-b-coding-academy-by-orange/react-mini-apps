import React, { Component } from "react";
import CommentCard from "./components/CommentCard";
import "./App.css";

class App extends Component {
  state = {
    cards: [
      {
        cardId: 1,
        username: "Abdullah Alsqoor",
        picture:
          "https://images.unsplash.com/photo-1528661291869-eab41a2c6544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        location: "Amman",
        postBody:
          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        createdTime: "3 minutes ago"
      },
      {
        cardId: 2,
        username: "Abdullah Alsqoor",
        picture:
          "https://images.unsplash.com/photo-1528661291869-eab41a2c6544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        location: "Amman",
        postBody:
          "This is another post I made earlier.",
        createdTime: "11 minutes ago"
      }
    ]
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center mb-4">App Component</h1>
        {this.state.cards.map(card => {
          return <div className="row"><CommentCard key={card.cardId} info={card} /> </div>;
        })}
      </div>
    );
  }
}

export default App;
