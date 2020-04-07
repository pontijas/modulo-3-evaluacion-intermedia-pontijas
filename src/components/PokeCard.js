import React from 'react';
import '../stylesheets/App.scss';

class PokeCard extends React.Component {
  render() {
    return (
      <div className="poke-card">
        <img src={this.props.url} alt="pokemon" />
        <h2>{this.setState[2]}</h2>
        <small>tipo</small>
      </div>
    );
  }
}

export default PokeCard;
