import React from 'react';
import Info from './Info';
import Forecast from './Forecast';

const CityWeather = ({ data, time }) => (
  <div className="panel panel-default">
    <div className="panel-body">
      <h2>{`${data.name}`}</h2>
      <Info icon={data.weather[0].icon} temp={data.main.temp} wind={data.wind.speed} press={data.main.pressure}/>
      <Forecast time={time} data={data.forecast}/>
    </div>
  </div>
);

CityWeather.propTypes = {
  data: React.PropTypes.object,
  time: React.PropTypes.object,
};

export default CityWeather;