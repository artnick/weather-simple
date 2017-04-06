export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

const API_WEATHER = 'http://api.openweathermap.org/data/2.5/forecast'

export const partialCopyObj = (obj, keys) => {
  let newObj = {};
  for (let key in obj) {
    if(keys.indexOf(key) != -1)
      newObj[key] = obj[key];
  }
  return newObj;
};


const fetchWeatherRequest = () => {
  return {
    type: FETCH_WEATHER_REQUEST,
  };
};

const fetchWeatherSuccess = (json) => {
  
  return {
    type: FETCH_WEATHER_SUCCESS,
    list,
    currentPath,
  };
};

const fetchWeatherFailure = () => {
  return {
    type: FETCH_WEATHER_FAILURE,
  };
};

export function fetchWeather(id) {
  return (dispatch, getState) => {
    dispatch(fetchWeatherRequest());

    return fetch(API_WEATHER)
      .then(response => response.json())
      .then(json => dispatch(fetchWeatherSuccess(json)))
      .catch(function(error) { 
        console.log(error); 
        dispatch(fetchWeatherFailure());  
      });
  };
}
