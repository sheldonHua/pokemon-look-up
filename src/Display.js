import React from 'react'

const Display = (props) => {
  const pokemon = props.pokemon
  
  let pokemonSprite

  if (pokemon.sprites !== undefined) {
    pokemonSprite = pokemon.sprites.front_default
  }

  return (
    <div>
      <figure>
        <img src={ pokemonSprite } />
      </figure>
      <h1>{ pokemon.name }</h1>
    </div>
  )
}


export default Display
