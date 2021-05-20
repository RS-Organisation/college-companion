import * as api from './api';
import { format } from 'date-fns';

import {
  FACULTY_LOGIN,
  FACULTY_LOGOUT,
  SET_FACULTY_DETAILS,
  GET_STUDENT_LIST,
  CLEAR_STUDENT_LIST,
  MARK_ATTENDANCE,
  UPLOAD_MARKS
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

export const updateFacultyDetails = (updates) => async (dispatch) => {
  try {
    var updatedData = { ...updates };
    if (updates?.dob) {
      updatedData = {
        ...updatedData,
        dob: format(updates.dob, 'dd-MM-yyyy'),
      };
    }
    const { data } = await api.updateFacultyDetails(updatedData);
    dispatch({
      type: SET_FACULTY_DETAILS,
      payload: data.result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateFacultyImage = (updates) => async (dispatch) => {
  try {
    const { data } = await api.updateFacultyImage(updates);
    dispatch({
      type: SET_FACULTY_DETAILS,
      payload: data.result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const markAttendance = (formData) => async (dispatch) => {
  try {
    await api.markAttendance(formData);
    dispatch({
      type: MARK_ATTENDANCE,
    });
  } catch (err) {
    console.log(err);
  }
};

export const uploadMarks = (formData) => async (dispatch) => {
  try {
    await api.uploadMarks(formData);
    dispatch({
      type: UPLOAD_MARKS,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getStudentList = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getStudentsList(formData);
    const subjectsQuery = {
      department: formData.department,
      semester: formData.semester,
    };
    const subjects = await api.getSubjectsForFaculty(subjectsQuery);
    dispatch({
      type: GET_STUDENT_LIST,
      payload: {
        studentsList: data,
        searchQuery: formData,
        subjectsList: subjects.data,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const clearStudentsList = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_STUDENT_LIST,
    });
  } catch (err) {
    console.log(err);
  }
};
