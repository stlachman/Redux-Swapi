import React from "react";
import { connect } from 'react-redux';
import { getCharacters } from '../actions';
import Character from "./Character";

class CharacterList extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    console.log(this.props)
    return (
      <ul>
        {this.props.characters && this.props.characters.map(character => {
          return <Character key={character.name} character={character} />;
        })}
      </ul>
    );
  }
  
};

const mapStateToProps = (state) => {
  return {
    characters: state.charsReducer.characters,
    isLoading: state.charsReducer.isLoading,
    error: state.charsReducer.error
  }
}

export default connect(mapStateToProps, { getCharacters })(CharacterList);
