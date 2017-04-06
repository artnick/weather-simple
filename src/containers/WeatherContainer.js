import React from 'react';
import { connect } from 'react-redux';
import Weather from '../components/Weather';
import { fetchWeather } from '../actions';

class WeatherContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchWeather(498817));
  }

  // componentWillReceiveProps(nextProps) {
  // }

  render() {
    return <Weather data={this.props.data} />;
  }
}

WeatherContainer.propTypes = {
  dispatch: React.PropTypes.func,
  data: React.PropTypes.array,
};

const mapStateToProps = (state) => {
  const weather = state.weather;
  return {
    data: weather.data,
  };
};


export default connect(mapStateToProps)(WeatherContainer);