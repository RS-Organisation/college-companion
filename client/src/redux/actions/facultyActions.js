import * as api from './api';
import { format } from 'date-fns';

import {
  FACULTY_LOGIN,
  FACULTY_LOGOUT,
  SET_FACULTY_DETAILS,
  GET_STUDENT_LIST,
  CLEAR_STUDENT_LIST,
  MARK_ATTENDANCE,
  UPLOAD_MARKS,
  SET_SNACKBAR,
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
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        snackbarMessage: message,
        snackbarType: 'error',
      },
    });
  }
};

export const facultyLogout = (history) => async (dispatch) => {
  try {
    dispatch({
      type: FACULTY_LOGOUT,
    });
    history.push('/');
  } catch (err) {
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        snackbarMessage: 'Something went wrong. Please try again',
        snackbarType: 'error',
      },
    });
  }
};

export const setFacultyDetails = (history) => async (dispatch) => {
  try {
    const { data } = await api.getFaculty();
    dispatch({
      type: SET_FACULTY_DETAILS,
      payload: data.result,
    });
    if (history.location.pathname === '/') {
      history.push('/faculty/');
    }
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        snackbarMessage: message,
        snackbarType: 'error',
      },
    });
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
    if (data.success) {
      dispatch({
        type: SET_SNACKBAR,
        payload: {
          snackbarMessage: data.message,
          snackbarType: 'success',
        },
      });
    }
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        snackbarMessage: message,
        snackbarType: 'error',
      },
    });
  }
};

export const updateFacultyImage = (updates) => async (dispatch) => {
  try {
    const { data } = await api.updateFacultyImage(updates);
    dispatch({
      type: SET_FACULTY_DETAILS,
      payload: data.result,
    });
    if (data.success) {
      dispatch({
        type: SET_SNACKBAR,
        payload: {
          snackbarMessage: 'Profile image updated',
          snackbarType: 'success',
        },
      });
    }
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        snackbarMessage: message,
        snackbarType: 'error',
      },
    });
  }
};

export const markAttendance = (formData) => async (dispatch) => {
  try {
    const { data } = await api.markAttendance(formData);
    dispatch({
      type: MARK_ATTENDANCE,
    });
    if (data.success) {
      dispatch({
        type: SET_SNACKBAR,
        payload: {
          snackbarMessage: data.message,
          snackbarType: 'success',
        },
      });
    }
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        snackbarMessage: message,
        snackbarType: 'error',
      },
    });
  }
};

export const uploadMarks = (formData) => async (dispatch) => {
  try {
    const { data } = await api.uploadMarks(formData);
    dispatch({
      type: UPLOAD_MARKS,
    });
    if (data.success) {
      dispatch({
        type: SET_SNACKBAR,
        payload: {
          snackbarMessage: data.message,
          snackbarType: 'success',
        },
      });
    }
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        snackbarMessage: message,
        snackbarType: 'error',
      },
    });
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
        studentsList: data.result,
        searchQuery: formData,
        subjectsList: subjects.data.result,
      },
    });
    if (data.success && subjects.data.success) {
      dispatch({
        type: SET_SNACKBAR,
        payload: {
          snackbarMessage: 'Details fetched successfully',
          snackbarType: 'success',
        },
      });
    }
  } catch (err) {
    const message = err?.response?.data?.message
      ? err.response.data.message
      : 'Something went wrong';
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        snackbarMessage: message,
        snackbarType: 'error',
      },
    });
  }
};

export const clearStudentsList = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_STUDENT_LIST,
    });
  } catch (err) {
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        snackbarMessage: 'Something went wrong. Please try again',
        snackbarType: 'error',
      },
    });
  }
};
