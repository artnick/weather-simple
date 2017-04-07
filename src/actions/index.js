export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export const FETCH_FORECAST_REQUEST = 'FETCH_FORECAST_REQUEST';
export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

export const ADD_CITY = 'ADD_CITY';
export const REMOVE_CITY = 'REMOVE_CITY';

const API_FORECAST = 'http://api.openweathermap.org/data/2.5/forecast?';
const API_WEATHER = 'http://api.openweathermap.org/data/2.5/weather?';
const API_SEARCH = 'http://api.openweathermap.org/data/2.5/find?type=like&';
const APP_ID = '0aacc1877b95283c4f28bf4b02a5e5d9';
const UNITS = 'metric';

export const addCity = (id) => {
  return {
    type: ADD_CITY,
    id,
  };
};

export const removeCity = (id) => {
  return {
    type: REMOVE_CITY,
    id,
  };
};

const searchRequest = () => {
  return {
    type: SEARCH_REQUEST,
  };
};

const searchSuccess = ({list: results}) => {
  console.log(results);
  return {
    type: SEARCH_SUCCESS,
    results,
  };
};

const searchFailure = () => {
  return {
    type: SEARCH_FAILURE,
  };
};

export const searchCity = (query) => {
  return (dispatch) => {
    dispatch(searchRequest());

    const requestUrl = API_SEARCH.concat(`APPID=${APP_ID}&units=${UNITS}&q=${query}`);

    return fetch(requestUrl)
      .then(response => response.json())
      .then(json => dispatch(searchSuccess(json)))
      .catch(function(error) { 
        console.log(error); 
        dispatch(searchFailure());  
      });
  };
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

export const fetchCurrentWeather = (id) => {
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


const fetchForecastRequest = (data) => {
  return {
    type: FETCH_FORECAST_REQUEST,
    data,
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
