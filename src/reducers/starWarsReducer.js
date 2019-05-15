import { FETCHING, SUCCESS, FAILURE} from "../actions";
const initialState = {
  characters: [],
  isLoading: false,
  error: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING: 
      return {
        ...state,
        isLoading: true
      }
    
    default:
      return state;
  }
};
