import React from 'react';
import { connect } from 'react-redux';
import Weather from '../components/Weather';
import { fetchWeather } from '../actions/weatherActions';
import { removeCity, getUserLocation } from '../actions/settingsActions';

class WeatherContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //add city to setting if running in first time
    if(this.props.useLocation)
      this.props.getUserLocation();

    //fetch weather for cities in settings
    this.props.cities.forEach((id) =>
      this.props.fetchWeather(id)
    );
  }

  componentWillReceiveProps(nextProps) {
    //fetch weather if new city was added
    if(nextProps.cities.length > this.props.cities.length){
      this.props.fetchWeather(nextProps.cities[nextProps.cities.length-1]);
    }
  }

  render() {
    return <Weather data={this.props.data} onRemoveCity={this.props.removeCity}/>;
  }
}

WeatherContainer.propTypes = {
  removeCity: React.PropTypes.func,
  fetchWeather: React.PropTypes.func,
  getUserLocation: React.PropTypes.func,
  data: React.PropTypes.array,
  cities: React.PropTypes.array,
  useLocation: React.PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    data: state.weather.data,
    cities: state.settings.cities,
    useLocation: state.settings.useLocation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeCity: (id) => {
      dispatch(removeCity(id));
    },
    fetchWeather: (id) => {
      dispatch(fetchWeather(id));
    },
    getUserLocation: () => {
      dispatch(getUserLocation());
    },
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(WeatherContainer);