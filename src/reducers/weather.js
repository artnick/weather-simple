import { 
  FETCH_WEATHER_REQUEST, 
  FETCH_WEATHER_SUCCESS, 
  FETCH_WEATHER_FAILURE, 
} from '../actions/';

const initialState = { 
  ids: [], 
  data: [],
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return state;
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.data],
      };
    case FETCH_WEATHER_FAILURE:
      return state;
    default:
      return state;
  }
};

export default weather;