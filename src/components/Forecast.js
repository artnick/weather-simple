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
    this.rows = [];
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.forecast.length != this.props.forecast.length){
      this.rows.push(<ForecastRow forecast={nextProps.forecast.slice(0, FORECAST_PER_DAY)}/>);
      const offset = nextProps.forecast.findIndex((item, ind, array)=> moment(item.dt_txt).weekday() != moment(array[0].dt_txt).weekday());
      for(let i = 0; i < DAYS_FORECAST; i++) {
        this.rows.push(<ForecastRow forecast={nextProps.forecast.slice(
          FORECAST_PER_DAY*i + offset,
          FORECAST_PER_DAY*i + offset + FORECAST_PER_DAY
        )}/>);
      }
    }
  }

  render() {
    return <div className='container-fluid'>
      {this.rows[this.props.activeTab]} 
    </div>;
  }
}

Content.defaultProps = {
  forecast: [],
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
    console.log(moment(this.props.time).weekday());
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

