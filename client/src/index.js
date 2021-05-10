import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App, { history } from './App';
import store from './redux/store';
import './index.css';

import LoadingPage from './components/utils/LoadingPage';
import { setAdminDetails, adminLogout } from './redux/actions/adminActions';

import {
  setFacultyDetails,
  facultyLogout,
} from './redux/actions/facultyActions';

import {
  setStudentDetails,
  studentLogout,
} from './redux/actions/studentActions';

import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

let hasRender = false;

const findUser = () => {
  if (Cookies.get('adminJWT')) {
    const decoded = jwt_decode(Cookies.get('adminJWT'));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(adminLogout()).then(() => renderApp());
    } else {
      store
        .dispatch(setAdminDetails(decoded._doc, history))
        .then(() => renderApp());
    }
  }

  if (Cookies.get('facultyJWT')) {
    const decoded = jwt_decode(Cookies.get('facultyJWT'));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(facultyLogout()).then(() => renderApp());
    } else {
      store
        .dispatch(setFacultyDetails(decoded._doc, history))
        .then(() => renderApp());
    }
  }

  if (Cookies.get('studentJWT')) {
    const decoded = jwt_decode(Cookies.get('studentJWT'));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(studentLogout()).then(() => renderApp());
    } else {
      store
        .dispatch(setStudentDetails(decoded._doc, history))
        .then(() => renderApp());
    }
  }
  renderApp();
};

const renderApp = () => {
  if (!hasRender) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRender = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

findUser();
