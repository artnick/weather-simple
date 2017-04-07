import React from 'react';
import CityWeather from './CityWeather';

const Weather = ({ data=[], time }) => (
  <div className=''>
    {data.map((city) => (
      <CityWeather key={city.id} data={city} time={time}/>
    ))}
  </div>
);

Weather.propTypes = {
  data: React.PropTypes.array,
  time: React.PropTypes.object,
};

export default Weather;