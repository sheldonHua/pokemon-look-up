import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    pokemon:{

    }
  }

  findPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log(err));
  }
  
  componentDidMount() {
    this.findPokemon()
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pokemon</h1>
        </header>
      </div>
    );
  }
}

export default App;
