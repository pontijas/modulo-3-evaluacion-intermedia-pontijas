import React from 'react';

const Pokemon = (props) => {
  // console.log('recibo el objeto entero', props.pokemon);
  return (
    <div>
      <img src={props.pokemon.url} alt="pokemon" />
      <h2>{props.pokemon.name}</h2>
    </div>
  );
};

export default Pokemon;
