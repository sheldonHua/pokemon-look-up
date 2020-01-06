import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from './actions/'

import './App.css';
import Display from './components/Display'
import Search from './components/Search'

class App extends Component {
  state = {
    pokemon: {},
    searchName: 'pikachu',
  }

  findPokemon = (name) => {
    this.props.fetchData(`https://pokeapi.co/api/v2/pokemon/${name}`)
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
    this.props.fetchData(`https://pokeapi.co/api/v2/pokemon/${this.state.searchName}`)
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="header-title">Pokemon Look-up</h1>
        </header>
        <div id="gameboy">
        <div id="screen">
            <Display pokemon={this.props.items} errorMessage={this.state.errorMessage} />
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

const mapStateToProps = state => ({
  items: state.items
})

const mapDispatchToProps = dispatch => ({
  fetchData: (url) => dispatch(itemsFetchData(url))
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
