import React from 'react';
import '../stylesheets/App.scss';

const PokeCard = (props) => {
  // console.log('recibo el objeto entero', props.pokemon);
  return (
    <div>
      <h2>{props.pokemon.name}</h2>
      <img src={props.pokemon.url} alt="pokemon" />
    </div>
  );
};

export default PokeCard;
