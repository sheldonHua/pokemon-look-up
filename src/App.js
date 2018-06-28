import React, { Component } from 'react';
import './App.css';
import Display from './Display'
import Search from './Search'

class App extends Component {
  state = {
    pokemon: {},
    searchName: 'pikachu',
  }

  findPokemon = (name) => {
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
        <div id="gameboy">
        <div id="screen">
          <Display pokemon={this.state.pokemon} errorMessage={this.state.errorMessage} />
        </div>
        <div id="dpad"></div>
        <div id="bevel"></div>
        <div id="bt1"></div>
        <div id="bt2"></div>
        
        </div>
        <Search submit={this.searchSubmit} searchName={this.searchName} />
      </div>
    );
  }
}

export default App;
