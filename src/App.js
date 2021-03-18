import React from 'react';
import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokemon";
import BestPokemon from "./BestPokemon";


const App = () => {
  return (
    <div>
     <Logo appName = "Jasvir's" />
     <BestPokemon abilities = {['Anticipation', 'Adaptability', 'Run-Away']} favourite = "Squirtle"/>
     <CaughtPokemon date = {new Date()} counter = {12} />
    </div>
  )
}



export default App

