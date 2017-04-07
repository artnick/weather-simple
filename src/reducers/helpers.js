const removeElement = (array, index) => {
  return [
    ...array.slice(0, index),
    ...array.slice(index + 1),
  ];
};

export const removeCity = (array, action) => {
  const index = array.indexOf(action.id);
  return removeElement(array, index);
};

export const removeCityFromWeather = (array, action) => {
  const index = array.findIndex((item)=> action.id == item.id);
  return removeElement(array, index);
};

export const addForecastToCity = (array, action) => {
  return array.map( (item) => {
    if(item.id !== action.id) {
      return item;
    }
    return {
      ...item,
      forecast: action.forecast,
    };    
  });
};