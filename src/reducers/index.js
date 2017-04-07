import { combineReducers } from 'redux';
import weather from './weather';
import search from './search';
import settings from './settings';

const reducer = combineReducers({
  weather,
  search,
  settings,
});

export default reducer;