import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="search panel panel-default">
        <div className="panel-heading">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search city"/>
            <input className="btn btn-primary" type="submit" value="Search" />
          </form>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  isSearching: React.PropTypes.array,
  results: React.PropTypes.object,
};

export default Search;