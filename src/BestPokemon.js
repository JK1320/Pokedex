import React from 'react'

const BestPokemon = (props) => {
    
  //const abilities = ['Anticipation', 'Adaptability', 'Run-Away']
  return (
    <div>
      <p>My favourite Pokemon is {props.favourite}</p>
      <ul>
        {props.abilities.map((elem, index) => (
          <li key={index}>{elem}</li>
        ))}
      </ul>
    </div>
  );
}

export default BestPokemon