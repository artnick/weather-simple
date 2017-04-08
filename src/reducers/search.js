import { 
  SEARCH_REQUEST, 
  SEARCH_SUCCESS, 
  SEARCH_FAILURE,
} from '../actions/searchActions';

const initialState = {
  isSearching: false,
  results: [],
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        isSearching: true,
        results: [],
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        isSearching: false,
        results: action.results,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        isSearching: false,
        results: [],
      };
    default:
      return state;
  }
};

export default search;