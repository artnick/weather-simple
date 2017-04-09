import { API_WEATHER, API_FORECAST, APP_ID, UNITS } from './constants';

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export const FETCH_FORECAST_REQUEST = 'FETCH_FORECAST_REQUEST';
export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS';

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

const fetchForecastRequest = () => {
  return {
    type: FETCH_FORECAST_REQUEST,
  };
};

const fetchForecastSuccess = (data) => {
  const forecast = data.list;
  const id = data.city.id;
  return {
    type: FETCH_FORECAST_SUCCESS,
    forecast,
    id,
  };
};

const fetchForecast = (id) => {
  return (dispatch) => {
    dispatch(fetchForecastRequest());

    const requestUrl = API_FORECAST.concat(`APPID=${APP_ID}&units=${UNITS}&id=${id}`);

    return fetch(requestUrl)
      .then(response => response.json())
      .then(json => dispatch(fetchForecastSuccess(json)))
      .catch(function(error) { 
        console.log(error); 
        dispatch(fetchWeatherFailure());  
      });
  };
};

export const fetchWeather = (id) => {
  return (dispatch) => {
    dispatch(fetchWeatherRequest());

    const requestUrl = API_WEATHER.concat(`APPID=${APP_ID}&units=${UNITS}&id=${id}`);

    return fetch(requestUrl)
      .then(response => response.json())
      .then(json => dispatch(fetchWeatherSuccess(json)))
      .then(() => dispatch(fetchForecast(id)))
      .catch(function(error) { 
        console.log(error); 
        dispatch(fetchWeatherFailure());  
      });
  };
};
