import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getCharacters } from '../actions';
import './CharacterList.css'
import Character from './Character';

class CharacterList extends React.Component {
	componentDidMount() {
		this.props.getCharacters();
	}

	render() {
		return (
			<div className="container">
				<h1>Star Wars Characters</h1>
				{this.props.isLoading && <Loader type="Puff" color="#42f1f4" height={80} width={80} />}
				<ul className="list">
					{this.props.characters &&
						this.props.characters.map((character) => {
							return <Character key={character.name} character={character} />;
						})}
					{this.props.error && <p>{this.props.error}</p>}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		characters: state.charsReducer.characters,
		isLoading: state.charsReducer.isLoading,
		error: state.charsReducer.error
	};
};

export default connect(mapStateToProps, { getCharacters })(CharacterList);
