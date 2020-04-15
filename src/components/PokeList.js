import React from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/App.scss';

const PokeList = (props) => {
  // console.log(props.pokemon);
  const htmlCode = props.pokemon.map((pokemon) => {
    return (
      <li key={pokemon.id} className="poke-item">
        <Pokemon pokemon={pokemon} />
      </li>
    );
  });
  return (
    <div>
      <ul className="poke-list">{htmlCode}</ul>
    </div>
  );
};

export default PokeList;
