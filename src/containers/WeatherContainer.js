import React from 'react';
import { connect } from 'react-redux';
import Weather from '../components/Weather';
import { fetchWeather } from '../actions/weatherActions';
import { removeCity } from '../actions/settingsActions';

class WeatherContainer extends React.Component {
  constructor(props) {
    super(props);
    this.time = new Date();
  }

  componentDidMount() {
    this.props.cities.forEach((id) =>
      this.props.fetchWeather(id)
    );
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.cities.length > this.props.cities.length){
      this.props.fetchWeather(nextProps.cities[nextProps.cities.length-1]);
    }
  }

  render() {
    return <Weather data={this.props.data} time={this.time} onRemoveCity={this.props.removeCity}/>;
  }
}

WeatherContainer.propTypes = {
  removeCity: React.PropTypes.func,
  fetchWeather: React.PropTypes.func,
  data: React.PropTypes.array,
  cities: React.PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    data: state.weather.data,
    cities: state.settings.cities,
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
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(WeatherContainer);