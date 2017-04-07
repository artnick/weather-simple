import { 
  FETCH_WEATHER_REQUEST, 
  FETCH_WEATHER_SUCCESS, 
  FETCH_WEATHER_FAILURE,
  FETCH_FORECAST_REQUEST,
  FETCH_FORECAST_SUCCESS,
  REMOVE_CITY,
} from '../actions/';
import { addForecastToCity, removeCityFromWeather } from './helpers';

const initialState = { 
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
    case FETCH_FORECAST_REQUEST:
      return state;
    case FETCH_FORECAST_SUCCESS:
      return {
        ...state,
        data: addForecastToCity(state.data, action),
      };
    case REMOVE_CITY:
      return {
        ...state,
        data: removeCityFromWeather(state.data, action),
      };
    default:
      return state;
  }
};

export default weather;