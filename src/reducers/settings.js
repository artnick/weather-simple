import { 
  ADD_CITY, 
  REMOVE_CITY,
} from '../actions/';

const initialState = { 
  useGeoLocation: false,
  cities: [],
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        cities: [...state.cities, action.id],
      };
    case REMOVE_CITY:
      return state;
    default:
      return state;
  }
};

export default settings;