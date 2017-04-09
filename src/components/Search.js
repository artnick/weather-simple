import React from 'react';
import Spinner from './Spinner';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      showResults: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSearch(event) {
    event.preventDefault();
    if(this.state.value.length > 0) {
      this.setState({showResults: true});
      this.props.search(this.state.value);
    }
  }

  handleBlur() {
    this.setState({showResults: false});
  }

  handleSelect(event, id) {
    event.preventDefault();
    this.setState({showResults: false});
    this.props.addCity(id);
  }

  render() {
    return (
      <div className="search panel panel-default">
        <div className="panel-heading">
          <form className="search-form" onSubmit={this.handleSearch}>
            <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search city" onBlur={this.handleBlur}/>
            <select 
              multiple
              size={this.props.results.length} 
              className={`select-city form-control ${this.state.showResults && this.props.results.length > 0 ? 'select-city_show' : ''}`
            }>
              {this.props.results.map( (city, index) => 
                <option onClick={(event) => this.handleSelect(event, city.id)} key={index}>
                  {city.name + ', ' + city.sys.country + ' ' + city.main.temp + '°C'}
                </option>
              )}
            </select>
            <input className="btn btn-primary" type="submit" value="Search" onBlur={this.handleBlur} disabled={!this.state.value}/>
            <Spinner visible={this.props.isSearching}/>
            <span className='text-danger'>{this.props.error}</span> 
          </form>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  isSearching: React.PropTypes.bool,
  results: React.PropTypes.array,
  error: React.PropTypes.string,
  search: React.PropTypes.func,
  addCity: React.PropTypes.func,
};

export default Search;