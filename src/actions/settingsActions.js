export const ADD_CITY = 'ADD_CITY';
export const REMOVE_CITY = 'REMOVE_CITY';

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
