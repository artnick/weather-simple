import React from 'react';
import { connect } from 'react-redux';
import Weather from '../components/Weather';
import { fetchCurrentWeather } from '../actions';

class WeatherContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchCurrentWeather(498817));
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