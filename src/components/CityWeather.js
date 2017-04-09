import React from 'react';
import Forecast from './Forecast';
import CurrentWeather from './CurrentWeather';

const CityWeather = ({ data, time, onRemoveCity }) => (
  <div className="city-weather panel panel-default">
    <div className="panel-body">
      <CurrentWeather
        city={`${data.name}, ${data.sys.country}`}
        description={data.weather[0].description} 
        icon={data.weather[0].icon} 
        temp={data.main.temp} 
        wind={data.wind.speed} 
        press={data.main.pressure}
      />
      {data.forecast ? <Forecast time={time} data={data.forecast}/> : null}
      <button onClick={()=>onRemoveCity(data.id)} type="button" className="close" aria-hidden="true">&times;</button>
    </div>
  </div>
);

CityWeather.propTypes = {
  data: React.PropTypes.object,
  time: React.PropTypes.object,
  onRemoveCity: React.PropTypes.func,
};

export default CityWeather;