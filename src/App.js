import React, { Component } from 'react';
import './App.css';
import Display from './Display'

class App extends Component {
  state = {
    pokemon: {}
  }

  findPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        pokemon: data
      })
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
        <Display pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
