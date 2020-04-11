import React, { useState } from 'react';
import pokemonData from '../data/pokemon';
import '../stylesheets/App.scss';

const App = () => {
  const [pokemon] = useState(pokemonData);
  console.log('aloha', pokemon);
  return <div>holiii</div>;
};

export default App;
