import React from 'react';
import WeatherContainer from '../containers/WeatherContainer';
import SearchContainer from '../containers/SearchContainer';

const App = () => (
  <div className='app container'>
    <SearchContainer/>
    <WeatherContainer/>
  </div>
);

export default App;
