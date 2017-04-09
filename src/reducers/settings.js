import { 
  ADD_CITY, 
  REMOVE_CITY,
  TOGGLE_USE_LOCATION,
} from '../actions/settingsActions';

import { removeCity } from './helpers';

const initialState = { 
  useLocation: true,
  cities: [],
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_USE_LOCATION:
      return {
        ...state,
        useLocation: action.useLocation,
      };
    case ADD_CITY:
      return {
        ...state,
        cities: [...new Set([...state.cities, action.id])],
      };
    case REMOVE_CITY:
      return {
        ...state,
        cities: removeCity(state.cities, action),
      };
    default:
      return state;
  }
};

export default settings;