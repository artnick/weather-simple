import React from 'react';
import Info from './Info';
import Forecast from './Forecast';

const CityWeather = ({ data, time, onRemoveCity }) => (
  <div className="city-weather panel panel-default">
    <div className="panel-body">
      <h2>{`${data.name}`}</h2>
      <Info icon={data.weather[0].icon} temp={data.main.temp} wind={data.wind.speed} press={data.main.pressure}/>
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