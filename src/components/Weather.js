import React from 'react';
import CityWeather from './CityWeather';

const Weather = ({ data=[], time, onRemoveCity }) => (
  <div className=''>
    {data.map((city) => (
      <CityWeather key={city.id} data={city} time={time} onRemoveCity={onRemoveCity}/>
    ))}
  </div>
);

Weather.propTypes = {
  data: React.PropTypes.array,
  time: React.PropTypes.object,
  onRemoveCity: React.PropTypes.func,
};

export default Weather;