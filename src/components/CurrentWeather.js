import React from 'react';

const CurrentWeather = ({ city, description, icon, temp, wind, press }) => {
  const iconStyle = {backgroundImage: `url(http://openweathermap.org/img/w/${icon}.png)`};
  return <div className='current-weather'>
    <h2>{`${city}`}<br/><small>{description[0].toUpperCase() + description.slice(1)}</small></h2>
    <i className='weather-icon' style={iconStyle}></i>
    <h3>{Math.floor(temp)}°C</h3>
    <div className='current-weather__additionals'>
      <small>Wind: {Math.floor(wind)} m/s</small><br/>
      <small>Pressure: {Math.floor(press)} hpa</small>
    </div>
  </div>;
};

CurrentWeather.propTypes = {
  description: React.PropTypes.string,
  city: React.PropTypes.string,
  icon: React.PropTypes.string,
  temp: React.PropTypes.number,
  wind: React.PropTypes.number,
  press: React.PropTypes.number,
};

export default CurrentWeather;