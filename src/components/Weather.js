import React from 'react';
import CityWeather from './CityWeather';

const Weather = ({ data=[], onRemoveCity }) => (
  <div className=''>
    {data.map((city) => (
      <CityWeather key={city.id} data={city} onRemoveCity={onRemoveCity}/>
    ))}
  </div>
);

Weather.propTypes = {
  data: React.PropTypes.array,
  onRemoveCity: React.PropTypes.func,
};

export default Weather;