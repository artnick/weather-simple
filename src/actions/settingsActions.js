import { fetchWeather } from './weatherActions';

export const ADD_CITY = 'ADD_CITY';
export const REMOVE_CITY = 'REMOVE_CITY';

const addCityToSettings = (id) => {
  return {
    type: ADD_CITY,
    id,
  };
};

export const addCity = (id) => {
  return (dispatch) => {
    dispatch(addCityToSettings(id));
    return dispatch(fetchWeather(id));
  };
};

export const removeCity = (id) => {
  return {
    type: REMOVE_CITY,
    id,
  };
};
