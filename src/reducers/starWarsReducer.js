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
        isLoading: true,
        error: ""
      }
    case SUCCESS: 
      return {
        ...state,
        isLoading: false,
        error: "",
        characters: action.payload
      }
    
    default:
      return state;
  }
};
