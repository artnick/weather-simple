import { API_SEARCH, APP_ID, UNITS} from './constants';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

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
