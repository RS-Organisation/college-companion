import * as api from './api';

import {
  FACULTY_LOGIN,
  FACULTY_LOGOUT,
  SET_FACULTY_DETAILS,
} from '../actionsType';

export const facultyLogin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.facultyLogin(formData);
    dispatch({
      type: FACULTY_LOGIN,
      payload: { userDetails: data.result, token: data.token },
    });

    history.push('/faculty');
  } catch (err) {
    console.log(err);
  }
};

export const facultyLogout = (history) => async (dispatch) => {
  try {
    dispatch({
      type: FACULTY_LOGOUT,
    });
    history.push('/');
  } catch (err) {
    console.log(err);
  }
};

export const setFacultyDetails = (data, history) => async (dispatch) => {
  try {
    dispatch({
      type: SET_FACULTY_DETAILS,
      payload: data,
    });
    if (history.location.pathname === '/') {
      history.push('/faculty/');
    }
  } catch (err) {
    console.log(err);
  }
};