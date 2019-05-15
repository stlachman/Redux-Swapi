import axios from 'axios';

// Define action types
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// Action Creator

export const getCharacters = () => (dispatch) => {
	dispatch({ type: FETCHING });
	axios
		.get(`https://swapi.co/api/people/`)
		.then((res) => dispatch({ type: SUCCESS, payload: res.data.results }))
		.catch((err) => dispatch({ type: FAILURE, payload: err.message }));
};
