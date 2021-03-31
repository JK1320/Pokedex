import React, { useState } from "react";

const CaughtPokemon = (props) => {
  // {/*const date = new Date().toLocaleDateString()*/}
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  function handleInputChange(event){
      setPokemonNameInput(event.target.value);    
  }

  function catchPokemon(){
//     const pokemons = [
//     "Bulbasaur",
//     "Ivysaur",
//     "Venusaur",
//     "Charmander",
//     "Charmeleon",
//     "Charizard",
//     "Squirtle",
//     "Wartortle",
//     "Blastoise",
//     "Caterpie",
//     "Metapod",
//     "Butterfree"
// ];
    if (pokemonNameInput){
       setCaught(caught => caught.concat(pokemonNameInput))
       setPokemonNameInput("")
    }     
  }
// {/*caught.concat(pokemons[Math.floor(Math.random() * pokemons.length)])*/}
  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date.toLocaleDateString()}
      </p>
      <input
        value={pokemonNameInput}
        type="text"
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <ul>
        {caught.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default CaughtPokemon

// {/*
// import React, { useState } from "react";
// function ShoppingList() {
//   const [list, setList] = useState([]);
//   function addToList() {
//     setList((list) => list.concat("Bread", "Milk", "Cheese", "Butter"));
//   }
//   function reduceList() {
//     function sliceArray() {
//       return list.slice(0, -1);
//     }
//     const newList = sliceArray();
//     setList(newList);
//   }
//   return (
//     <p>
//       <button onClick={reduceList}>remove last items</button>
//       <button onClick={addToList}>Add item to list</button>
//       {list.map((item, index) => {
//         return <li key={index}>{item}</li>;
//       })}
//     </p>
//   );
// }
// export default ShoppingList;
// */}