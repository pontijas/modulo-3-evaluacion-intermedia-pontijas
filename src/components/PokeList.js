import React from 'react';
import '../stylesheets/App.scss';

const PokeList = (props) => {
  console.log(props.pokemon);
  const htmlCode = props.pokemon.map((pokemon) => {
    return <li key={pokemon.id}>holi</li>;
  });
  return (
    <div>
      <ul className="poke-list">{htmlCode}</ul>
    </div>
  );
};

export default PokeList;
