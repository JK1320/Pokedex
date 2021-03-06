import React from 'react'

const Logo = (props) => {
    //console.log(props)
  //const appName = "Jasvir's"
    // const logWhenClicked = () => {
    //   console.log("Hello");
    // }
  return (
    <div className="header">
      <header>
        <h2>Welcome to {props.appName} Pokedex</h2>
        <img
          onClick={props.handleClick}
          alt="pokeman"
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        />
      </header>
    </div>
  );
}

export default Logo