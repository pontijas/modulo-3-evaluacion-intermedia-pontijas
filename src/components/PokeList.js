import React from 'react';
import PokeCard from './PokeCard.js';
import '../stylesheets/App.scss';

class PokeList extends React.Component {
  render() {
    return (
      <section className="section-pokemon">
        <h1>Mi lista Pokemon</h1>
        <ul className="section-poke_list">
          <li>
            <PokeCard />
          </li>
          <li>
            <PokeCard />
          </li>
          <li>
            <PokeCard />
          </li>
        </ul>
      </section>
    );
  }
}

export default PokeList;
