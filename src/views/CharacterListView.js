import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { CharacterList } from '../components';
// import actions
import { getCharacters } from '../actions';

class CharacterListView extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		// call our action
		this.props.getCharacters();
	}

	render() {
		if (this.props.isLoading) {
			return <Loader type="Puff" color="#42f1f4" height={80} width={80} />;
		}

		return (
			<div className="CharactersList_wrapper">
				<CharacterList error={this.props.error} characters={this.props.characters} />
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

export default connect(mapStateToProps, { getCharacters })(CharacterListView);
