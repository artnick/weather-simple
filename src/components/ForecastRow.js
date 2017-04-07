import React from 'react';
import Info from './Info';

const ForecastRow = ({ forecast }) => {
  return <div className='row'>
    {forecast.map((data, index) =>
      <Info
        key={index}
        icon={data.weather[0].icon} 
        temp={data.main.temp} 
        wind={data.wind.speed} 
        press={data.main.pressure}
      />
    )}
  </div>;
};

ForecastRow.propTypes = {
  forecast: React.PropTypes.array,
};

export default ForecastRow;