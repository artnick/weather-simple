import React from 'react';

const Info = ({ icon, temp, wind, press, hour }) => {
  const iconStyle = {backgroundImage: `url(http://openweathermap.org/img/w/${icon}.png)`};
  return <div className='info'>
    <span>{hour ? hour : null}</span><br/>
    <i className='weather-icon' style={iconStyle}></i>
    <small>{temp} °C</small><br/>
    <small>{wind} m/s</small><br/>
    <small>{press}</small><br/>
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