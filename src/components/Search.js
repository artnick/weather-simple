import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      showResults: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSearch(event) {
    event.preventDefault();
    if(this.state.value) {
      this.setState({showResults: true});
      this.props.search(this.state.value);
    }
  }

  handleSelect(event, id) {
    event.preventDefault();
    //this.setState({showResults: false});
    this.props.addCity(id);
  }

  render() {
    return (
      <div className="search panel panel-default">
        <div className="panel-heading">
          <form className="search-form" onSubmit={this.handleSearch}>
            <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search city"/>
            <select 
              multiple 
              className={`select-city form-control ${this.state.showResults && this.props.results.length > 0 ? '' : 'hidden'}`
            }>
              {this.props.results.map( (city, index) => 
                <option onClick={(event) => this.handleSelect(event, city.id)} key={index}>{city.name + ', ' + city.sys.country + ' ' + city.main.temp + '°C'}</option>
              )}
            </select>
            <input className="btn btn-primary" type="submit" value="Search" />
          </form>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  isSearching: React.PropTypes.bool,
  results: React.PropTypes.array,
  search: React.PropTypes.func,
  addCity: React.PropTypes.func,
};

export default Search;