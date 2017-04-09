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
  return {
    type: SEARCH_SUCCESS,
    results,
  };
};

const searchFailure = (error) => {
  return {
    type: SEARCH_FAILURE,
    error,
  };
};

export const searchCity = (query) => {
  return (dispatch) => {
    dispatch(searchRequest());

    const requestUrl = API_SEARCH.concat(`APPID=${APP_ID}&units=${UNITS}&q=${query}`);

    return fetch(requestUrl)
      .then(response => response.json())
      .then(json => {
        if(json.cod != 200)
          dispatch(searchFailure(json.message[0].toUpperCase() + json.message.slice(1)));
        else
          if(json.count > 0)
            dispatch(searchSuccess(json));
          else
            dispatch(searchFailure('Not found'));
      })
      .catch(function(error) { 
        console.log(error);  
      });
  };
};
