import { connect } from 'react-redux';
import Search from '../components/Search';

const mapStateToProps = (state) => {
  const search = state.search;
  return {
    isSearching: search.isSearching,
    results: search.results,
  };
};

const SearchContainer = connect(mapStateToProps)(Search);

export default SearchContainer;
