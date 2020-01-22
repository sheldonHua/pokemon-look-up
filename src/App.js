import React, { Component } from 'react';
import { pokemonApi } from './config/constants'

import './App.css';
import Display from './components/Display'
import Search from './components/Search'

class App extends Component {
  state = {
    pokemon: {},
    list: [],
    searchName: 'pikachu',
  }

  searchSubmit = (e) => {
    e.preventDefault();
    this.fetchPokemon(this.state.searchName)
  }

  searchName = (e) => {
    this.setState({
      searchName: e.target.value
    })
  }

  fetchPokemon = async (name) => {
    const url = name !== undefined ? pokemonApi + `/${name}` : pokemonApi + '?limit=151'
    try {
      const response = await (await fetch(url)).json()
      if (name) {
        this.setState({
          pokemon: response
        })
      } else {
        this.setState({
          list: response
        })
      }
    } catch(err) {
      console.log(err)
    }
  }

  componentDidMount() {
    this.fetchPokemon()
    this.fetchPokemon(this.state.searchName)
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="header-title">Pokemon Look-up</h1>
        </header>
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

export default App
