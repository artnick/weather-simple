import React from 'react';
import moment from 'moment';
import ForecastRow from './ForecastRow';

const DAYS_FORECAST = 5;
const FORECAST_PER_DAY = 8;

const Tabs = ({ days, activeTab, changeTab }) => {
  return (
    <ul className="nav nav-tabs">
      {days.map((day, index) => {
        return (
          <Tab key={index} day={day} isActive={activeTab === index} handleClick={() => changeTab(index)} />
        );
      })}
    </ul>
  );
};

Tabs.propTypes = {
  days: React.PropTypes.array,
  activeTab: React.PropTypes.number,
  changeTab: React.PropTypes.func,
};

const Tab = ({ isActive, handleClick, day }) => {
  return (
    <li onClick={(e) => {e.preventDefault(); handleClick();}} className={isActive ? 'active' : null}>
      <a href="#" >{day.format('ddd, MMM Do')}</a>
    </li>
  );
};

Tab.propTypes = {
  day: React.PropTypes.object,
  handleClick: React.PropTypes.func,
  isActive: React.PropTypes.bool,
};

class Content extends React.Component {
  constructor(props) {
    super(props);
    const offset = this.props.forecast.findIndex((item, ind, array)=> moment(item.dt_txt).isAfter(array[0].dt_txt, 'day'));
    this.rows =  Array(DAYS_FORECAST).fill(0).map((item, index) => {
      if(index == 0)
        return <ForecastRow forecast={this.props.forecast.slice(0, FORECAST_PER_DAY)}/>;
      return <ForecastRow forecast={this.props.forecast.slice(
        FORECAST_PER_DAY * (index-1) + offset,
        FORECAST_PER_DAY * index + offset,
      )}/>;
    });
  }

  render() {
    return <div className='container-fluid'>
      {this.rows[this.props.activeTab]} 
    </div>;
  }
}

Content.propTypes = {
  activeTab: React.PropTypes.number,
  forecast: React.PropTypes.array,
};

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 0};
    this.days = Array(DAYS_FORECAST).fill(0).map((item, index) => moment(this.props.time).add(index, 'day'));
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(tab) {
    this.setState({activeTab: tab});
  }

  render() {
    return (
      <div>
        <Tabs days={this.days} activeTab={this.state.activeTab} changeTab={this.handleClick} />
        <Content activeTab={this.state.activeTab} forecast={this.props.data}/>
      </div>
    );
  }
}

Forecast.propTypes = {
  data: React.PropTypes.array,
  time: React.PropTypes.object,
};

export default Forecast;

