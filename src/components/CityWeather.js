import React from 'react';
import Forecast from './Forecast';
import CurrentWeather from './CurrentWeather';
import Spinner from './Spinner';

const CityWeather = ({ data, onRemoveCity }) => (
  <div className="city-weather panel panel-default">
    {data.forecast ?
      <div className="panel-body">
        <CurrentWeather
          city={`${data.name}, ${data.sys.country}`}
          description={data.weather[0].description} 
          icon={data.weather[0].icon} 
          temp={data.main.temp} 
          wind={data.wind.speed} 
          press={data.main.pressure}
        />
        <Forecast data={data.forecast}/>
        <button onClick={()=>onRemoveCity(data.id)} type="button" className="close" aria-hidden="true">&times;</button> 
      </div> :
      <Spinner size='big'/>
    }
  </div>
);

CityWeather.propTypes = {
  data: React.PropTypes.object,
  onRemoveCity: React.PropTypes.func,
};

export default CityWeather;