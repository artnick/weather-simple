import { combineReducers } from 'redux';
import weather from './weather';
import search from './search';

const reducer = combineReducers({
  weather,
  search,
});

export default reducer;