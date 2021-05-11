import * as api from './api';
import { format } from 'date-fns';

import {
  ADMIN_LOGIN,
  ADMIN_LOGOUT,
  SET_ADMIN_DETAILS,
  ADD_ADMIN,
  ADD_FACULTY,
  ADD_STUDENT,
  ADD_SUBJECT
} from '../actionsType';

export const adminLogin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.adminLogin(formData);
    dispatch({
      type: ADMIN_LOGIN,
      payload: { userDetails: data.result, token: data.token },
    });

    history.push('/admin');
  } catch (err) {
    console.log(err);
  }
};

export const adminLogout = (history) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_LOGOUT,
    });
    history.push('/admin/login');
  } catch (err) {
    console.log(err);
  }
};

export const setAdminDetails = (data, history) => async (dispatch) => {
  try {
    dispatch({
      type: SET_ADMIN_DETAILS,
      payload: data,
    });
    if (history.location.pathname === '/') {
      history.push('/admin/');
    }
  } catch (err) {
    console.log(err);
  }
};

export const addAdmin = (formData) => async (dispatch) => {
  try {
    const data = { ...formData, dob: format(formData.dob, 'dd-MM-yyyy') };
    await api.addAdmin(data);
    dispatch({ type: ADD_ADMIN });
  } catch (err) {
    console.log(err);
  }
};

export const addFaculty = (formData) => async (dispatch) => {
  try {
    const data = { ...formData, dob: format(formData.dob, 'dd-MM-yyyy') };
    await api.addFaculty(data);
    dispatch({ type: ADD_FACULTY });
  } catch (err) {
    console.log(err);
  }
};

export const addStudent = (formData) => async (dispatch) => {
  try {
    const data = { ...formData, dob: format(formData.dob, 'dd-MM-yyyy') };
    await api.addStudent(data);
    dispatch({ type: ADD_STUDENT });
  } catch (err) {
    console.log(err);
  }
};

export const addSubject = (formData) => async (dispatch) => {
  try {
    await api.addSubject(formData);
    dispatch({ type: ADD_SUBJECT });
  } catch (err) {
    console.log(err);
  }
};
