import React from 'react'

const CaughtPokemon = (props) => {
  //const date = new Date().toLocaleDateString()
  return (
    <p>Caught {props.counter} Pokemon on {props.date.toLocaleDateString()}</p>
  )
}

export default CaughtPokemon