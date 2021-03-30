import React from 'react';
import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokemon";
import BestPokemon from "./BestPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";


const App = () => {

  const logWhenClicked = () => {
      console.log("Hello, What day is today");
    }

    

  return (
    <div>
     <Logo handleClick={logWhenClicked} appName = "Jasvir's" />
     <BestPokemon abilities = {['Anticipation', 'Adaptability', 'Run-Away']} favourite = "Squirtle"/>
     <CaughtPokemon date = {new Date()} counter = {12} />
     <PokemonMovesSelector />
     <PokemonCity />
    </div>
  )
}



export default App

