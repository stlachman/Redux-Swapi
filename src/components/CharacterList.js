import React from "react";
import { connect } from 'react-redux';
import { getCharacters } from '../actions';
import Character from "./Character";

class CharacterList extends React.Component {
  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    return (
      <ul>
        {this.props.characters && this.props.characters.map(character => {
          return <Character key={character.name} character={character} />;
        })}
        {this.props.error && <p>{this.props.error}</p>}
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
