import { connect } from 'react-redux';
import Search from '../components/Search';
import { searchCity, addCity } from '../actions';

const mapStateToProps = (state) => {
  const search = state.search;
  return {
    isSearching: search.isSearching,
    results: search.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (query) => {
      dispatch(searchCity(query));
    },
    addCity: (id) => {
      dispatch(addCity(id));
    },
  };
};

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
