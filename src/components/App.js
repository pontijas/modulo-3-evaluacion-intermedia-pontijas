import React, { useState } from 'react';
import pokemonData from '../data/pokemon';
import PokeList from './PokeList';
import '../stylesheets/App.scss';

const App = () => {
  const [pokemon] = useState(pokemonData);
  return (
    <div className="poke-app">
      <PokeList pokemon={pokemon} />
    </div>
  );
};

export default App;
