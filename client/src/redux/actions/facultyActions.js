import * as api from './api';
import { format } from 'date-fns';

import {
  FACULTY_LOGIN,
  FACULTY_LOGOUT,
  SET_FACULTY_DETAILS,
  GET_STUDENT_LIST,
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

export const setFacultyDetails = (history) => async (dispatch) => {
  try {
    const { data } = await api.getFaculty();
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

export const updateFaculty = (updates) => async (dispatch) => {
  try {
    var updatedData = {
      ...updates,
    };
    if (updates?.dob) {
      updatedData = {
        ...updatedData,
        dob: format(updates.dob, 'dd-MM-yyyy'),
      };
    }
    const { data } = await api.updateFaculty(updatedData);
    dispatch({
      type: SET_FACULTY_DETAILS,
      payload: data.result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getStudentList = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getStudentsList(formData);
    console.log(data);
    dispatch({
      type: GET_STUDENT_LIST,
      // payload: { userDetails: data.result, token: data.token },
    });
  } catch (err) {
    console.log(err);
  }
};
