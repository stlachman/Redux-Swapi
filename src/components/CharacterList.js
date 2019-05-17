import React from 'react';

import './CharacterList.css';
import Character from './Character';

const CharacterList = (props) => {
	return (
		<div className="container">
			<h1>Star Wars Characters</h1>
			<ul className="list">
				{props.characters &&
					props.characters.map((character) => {
						return <Character key={character.name} character={character} />;
					})}
          {props.error && <p>{props.error}</p>}
			</ul>
		</div>
	);
};

export default CharacterList;
