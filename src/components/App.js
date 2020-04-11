import React from 'react';
import PokeList from './PokeList.js';
import '../stylesheets/App.scss';

const pokeInfo = class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = pokeInfo;
    console.log('array', pokeInfo);
  }

  render() {
    return <PokeList />;
  }
};

export default App;
