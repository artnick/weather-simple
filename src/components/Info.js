import React from 'react';

const Info = ({ icon, temp, wind, press, hour }) => {
  const iconStyle = {backgroundImage: `url(http://openweathermap.org/img/w/${icon}.png)`};
  return <div className='info'>
    <span>{hour}</span><br/>
    <i className='weather-icon' style={iconStyle}></i>
    <small><b>{Math.floor(temp)} °C</b></small><br/>
    <small>{Math.floor(wind)} m/s</small><br/>
    <small>{Math.floor(press)}</small><br/>
  </div>;
};

Info.propTypes = {
  icon: React.PropTypes.string,
  temp: React.PropTypes.number,
  wind: React.PropTypes.number,
  press: React.PropTypes.number,
  hour: React.PropTypes.string,
};

export default Info;