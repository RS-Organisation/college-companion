import { combineReducers } from 'redux';

import adminReducer from './adminReducer';
import facultyReducer from './facultyReducer';
import studentReducer from './studentReducer';

export default combineReducers({
  adminReducer,
  facultyReducer,
  studentReducer,
});
