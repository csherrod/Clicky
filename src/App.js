import React, { Component } from 'react';
import Icons from "./components/Icons";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";
import icons from "./icons.json";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // Setting this.state.card to cards json array
  state = {
    cards
  };



  render() {
    return (
      <Wrapper>
        <Title />
        <div className="row text-center">
            {this.state.cards.map(card => (
              <Card
                id={card.id}
                key={card.id}
                name={card.name}
                image={card.image}
              />
            ))}
          </div>
        </Wrapper>












      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
