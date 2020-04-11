import React from 'react';
import '../stylesheets/App.scss';

const PokeList = (props) => {
  console.log(props.pokemon);
  const htmlCode = props.pokemon.map((pokemon) => {
    console.log('holiiiiii');
  });
  return (
    <div>
      <ul className="poke-list">{htmlCode}</ul>
    </div>
  );
};

export default PokeList;
