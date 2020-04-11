import React from 'react';
import '../stylesheets/App.scss';

const PokeList = (props) => {
  console.log(props);
  return (
    <div>
      <ul className="poke-list">Lista Pokemon</ul>
    </div>
  );
};

export default PokeList;
