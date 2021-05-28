import { combineReducers } from 'redux';

import adminReducer from './adminReducer';
import facultyReducer from './facultyReducer';
import studentReducer from './studentReducer';
import snackbarReducer from './snackbarReducer';

export default combineReducers({
  adminReducer,
  facultyReducer,
  studentReducer,
  snackbarReducer,
});
