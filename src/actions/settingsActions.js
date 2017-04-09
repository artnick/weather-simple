import { API_WEATHER, APP_ID } from './constants';

export const ADD_CITY = 'ADD_CITY';
export const REMOVE_CITY = 'REMOVE_CITY';

export const TOGGLE_USE_LOCATION = 'TOGGLE_USE_LOCATION';


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

const toggleUseLocation = (useLocation) => {
  return {
    type: TOGGLE_USE_LOCATION,
    useLocation,
  };
}; 

export const getUserLocation = () => {
  return (dispatch) => {
    dispatch(toggleUseLocation(false));

    return fetch('https://api.ipify.org?format=json') //getting client IP
      .then(response => response.json())
      .then(json => fetch(`https://freegeoip.net/json/${json.ip}`)) //getting client coordinates by IP
      .then(response => response.json())
      .then(json => fetch(API_WEATHER.concat(`APPID=${APP_ID}&lat=${json.latitude}&lon=${json.longitude}`))) //getting city id
      .then(response => response.json())
      .then(json => dispatch(addCity(json.id)))
      .catch(function(error) { 
        console.log(error); 
      });
  };
};