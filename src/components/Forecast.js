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

const Content = ({ activeTab, forecast=[] }) => {
  const rows = [];
  rows.push(<ForecastRow forecast={forecast.slice(0,FORECAST_PER_DAY)}/>);
  const start = (DAYS_FORECAST * FORECAST_PER_DAY - forecast.length);
  for(let i = 1; i < DAYS_FORECAST; i++) {
    rows.push(<ForecastRow forecast={forecast.slice(
      FORECAST_PER_DAY*i - start,
      FORECAST_PER_DAY*i - start + FORECAST_PER_DAY
    )}/>);
  }
  return (
    <div className='container-fluid'>
      {rows[activeTab]} 
    </div>
  );
};


Content.propTypes = {
  activeTab: React.PropTypes.number,
  forecast: React.PropTypes.array,
};

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.days = [];
    for(let i = 0; i < DAYS_FORECAST; i++) {
      this.days.push(moment(this.props.time).add(i, 'day'));
    }
    this.state = {activeTab: 0};
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

