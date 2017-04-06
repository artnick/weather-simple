export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

//const API_FORECAST = 'http://api.openweathermap.org/data/2.5/forecast?';
const API_WEATHER = 'http://api.openweathermap.org/data/2.5/weather?';
const APP_ID = '0aacc1877b95283c4f28bf4b02a5e5d9';
const UNITS = 'metric';

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

const fetchWeatherSuccess = (data) => {
  return {
    type: FETCH_WEATHER_SUCCESS,
    data,
  };
};

const fetchWeatherFailure = () => {
  return {
    type: FETCH_WEATHER_FAILURE,
  };
};

export const fetchWeather = (id) => {
  return (dispatch) => {
    dispatch(fetchWeatherRequest());

    const requestUrl = API_WEATHER
      .concat(`APPID=${APP_ID}`)
      .concat(`&units=${UNITS}`)
      .concat(`&id=${id}`);

    return fetch(requestUrl)
      .then(response => response.json())
      .then(json => dispatch(fetchWeatherSuccess(json)))
      .catch(function(error) { 
        console.log(error); 
        dispatch(fetchWeatherFailure());  
      });
  };
};
