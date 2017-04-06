import React from 'react';
import CityWeather from './CityWeather';

const Weather = ({ data=[] }) => (
  <ul className='row'>
    {data.map((city) => (
      <CityWeather key={city.id} data={city}/>
    ))}
  </ul>
);

Weather.propTypes = {
  data: React.PropTypes.array,
};

export default Weather;