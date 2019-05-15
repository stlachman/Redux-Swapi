import React from "react";

import Character from "./Character";

class CharacterList extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('mounted');
  }

  render() {
    return (
      <ul>
        {this.props.characters && this.props.characters.map(character => {
          return <Character key={character.name} character={character} />;
        })}
      </ul>
    );
  }
  
};

export default CharacterList;
