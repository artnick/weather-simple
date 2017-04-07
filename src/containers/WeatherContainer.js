import React from 'react';
import { connect } from 'react-redux';
import Weather from '../components/Weather';
import { fetchCurrentWeather, removeCity } from '../actions';

class WeatherContainer extends React.Component {
  constructor(props) {
    super(props);
    this.time = new Date();
  }

  componentDidMount() {
    this.props.cities.forEach((id) =>
      this.props.fetchCurrentWeather(id)
    );
  }

  render() {
    return <Weather data={this.props.data} time={this.time} onRemoveCity={this.props.removeCity}/>;
  }
}

WeatherContainer.propTypes = {
  removeCity: React.PropTypes.func,
  fetchCurrentWeather: React.PropTypes.func,
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
    fetchCurrentWeather: (id) => {
      dispatch(fetchCurrentWeather(id));
    },
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(WeatherContainer);