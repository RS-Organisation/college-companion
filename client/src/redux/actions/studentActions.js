import * as api from './api';

import {
  STUDENT_LOGIN,
  STUDENT_LOGOUT,
  SET_STUDENT_DETAILS,
} from '../actionsType';

export const studentLogin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.studentLogin(formData);
    dispatch({
      type: STUDENT_LOGIN,
      payload: { userDetails: data.result, token: data.token },
    });

    history.push('/student');
  } catch (err) {
    console.log(err);
  }
};

export const studentLogout = (history) => async (dispatch) => {
  try {
    dispatch({
      type: STUDENT_LOGOUT,
    });
    history.push('/');
  } catch (err) {
    console.log(err);
  }
};

export const setStudentDetails = (data, history) => async (dispatch) => {
  try {
    dispatch({
      type: SET_STUDENT_DETAILS,
      payload: data,
    });
    if (history.location.pathname === '/') {
      history.push('/student/');
    }
  } catch (err) {
    console.log(err);
  }
};

export const updateProfile = (updates) => async (dispatch) => {
  try {
    const { data } = await api.updateStudentProfile(updates);
    console.log(data);
    dispatch({
      type: SET_STUDENT_DETAILS,
      payload: data.result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updatePassword = (updates) => async (dispatch) => {
  try {
    const { data } = await api.updateStudentPassword(updates);
    dispatch({
      type: SET_STUDENT_DETAILS,
      payload: data.result,
    });
  } catch (err) {
    console.log(err);
  }
};
