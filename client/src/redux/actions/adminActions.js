import * as api from './api';
import { format } from 'date-fns';

import {
  ADMIN_LOGIN,
  ADMIN_LOGOUT,
  SET_ADMIN_DETAILS,
  ADD_ADMIN,
  ADD_FACULTY,
  ADD_STUDENT,
  ADD_SUBJECT,
  GET_FACULTIES,
  GET_STUDENTS,
  GET_SUBJECTS,
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

export const getFaculties = (formData) => async (dispatch) => {
  try {
    const faculties = await api.getFaculties(formData);
    dispatch({
      type: GET_FACULTIES,
      payload: {
        faculties: faculties.data,
        department: formData.department,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getStudents = (formData) => async (dispatch) => {
  try {
    const { department, year } = formData;
    const students = await api.getStudents(formData);
    dispatch({
      type: GET_STUDENTS,
      payload: {
        students: students.data,
        department,
        year,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSubjects = (formData) => async (dispatch) => {
  try {
    const { department, semester } = formData;
    const subjects = await api.getSubjects(formData);
    dispatch({
      type: GET_SUBJECTS,
      payload: {
        subjects: subjects.data,
        department,
        semester,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateProfile = (updates) => async (dispatch) => {
  try {
    console.log('updates', updates);
    const { data } = await api.updateProfile(updates);
    console.log(data);
    dispatch({
      type: SET_ADMIN_DETAILS,
      payload: data.result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updatePassword = (updates) => async (dispatch) => {
  try {
    const { data } = await api.updatePassword(updates);
    dispatch({
      type: SET_ADMIN_DETAILS,
      payload: data.result,
    });
  } catch (err) {
    console.log(err);
  }
};
