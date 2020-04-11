import React, { useState } from 'react';
import pokemonData from '../data/pokemon';
import '../stylesheets/App.scss';
import PokeList from './PokeList';

const App = () => {
  const [pokemon] = useState(pokemonData);
  return (
    <div>
      <PokeList pokemon={pokemon} />
    </div>
  );
};

export default App;
