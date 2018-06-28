import React from 'react'

const Display = (props) => {
  const { pokemon } = props

  let pokemonSprite

  if (pokemon.sprites !== undefined) {
    pokemonSprite = pokemon.sprites.front_default
  }

  const renderHeading = (name) => {
    return name ? <h1>{ name }</h1> : <p>No pokemon with that name exist</p>
  }

  const renderSprite = (sprite) => {
    return sprite && <img src={sprite} alt="pokemon" />
  }

  return (
    <div>
      <figure>
     
        { renderSprite(pokemonSprite) }
      </figure>
      
    </div>
  )
}


export default Display
