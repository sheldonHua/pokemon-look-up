import React, { Component } from 'react';
import './App.css';
import Display from './Display'

class App extends Component {
  state = {
    pokemon: {},
    searchName: 'pikachu'
  }

  findPokemon = (name) => {
    console.log(name);
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        pokemon: data
      })
    })
    .catch(err => console.log(err));
  }

  searchSubmit = (e) => {
    e.preventDefault();
    this.findPokemon(this.state.searchName)
  }

  searchName = (e) => {
    this.setState({
      searchName: e.target.value
    })
  }

  componentDidMount() {
    this.findPokemon(this.state.searchName);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">          
        </header>
        <Display pokemon={this.state.pokemon} />
        <form onSubmit={this.searchSubmit}>
          <input type="text" onChange={this.searchName} />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default App;
