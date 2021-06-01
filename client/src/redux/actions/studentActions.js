import * as api from './api';
import { format } from 'date-fns';

import {
  STUDENT_LOGIN,
  STUDENT_LOGOUT,
  SET_STUDENT_DETAILS,
  GET_STUDENT_MARKS,
  GET_ATTENDANCE,
  GET_ATTENDANCE_DATA,
  GET_SUBJECTS,
  CLEAR_Subject_LIST,
  SET_SNACKBAR,
} from '../actionsType';

export const studentLogin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.studentLogin(formData);
    dispatch({
      type: STUDENT_LOGIN,
      payload: {
        userDetails: data.result,
        token: data.token,
      },
    });
    history.push('/student');
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

export const studentLogout = (history) => async (dispatch) => {
  try {
    dispatch({
      type: STUDENT_LOGOUT,
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

export const setStudentDetails = (history) => async (dispatch) => {
  try {
    const { data } = await api.getStudent();
    dispatch({
      type: SET_STUDENT_DETAILS,
      payload: data.result,
    });
    if (history.location.pathname === '/') {
      history.push('/student/');
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

export const updateStudentDetails = (updates) => async (dispatch) => {
  try {
    var updatedData = { ...updates };
    if (updates?.dob) {
      updatedData = {
        ...updatedData,
        dob: format(updates.dob, 'dd-MM-yyyy'),
      };
    }
    const { data } = await api.updateStudentDetails(updatedData);
    dispatch({
      type: SET_STUDENT_DETAILS,
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

export const updateStudentImage = (updates) => async (dispatch) => {
  try {
    const { data } = await api.updateStudentImage(updates);
    dispatch({
      type: SET_STUDENT_DETAILS,
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

export const getMarks = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getMarksOfStudent(formData);
    dispatch({
      type: GET_STUDENT_MARKS,
      payload: {
        marksList: data.result,
        queryObj: {
          examType: formData.examType,
          semester: formData.semester,
        },
      },
    });
    if (data.success) {
      if (data.result.length === 0) {
        dispatch({
          type: SET_SNACKBAR,
          payload: {
            snackbarMessage: 'No data found from database',
            snackbarType: 'warning',
          },
        });
      } else {
        dispatch({
          type: SET_SNACKBAR,
          payload: {
            snackbarMessage: data.message,
            snackbarType: 'success',
          },
        });
      }
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

export const getAttendance = () => async (dispatch) => {
  try {
    const { data } = await api.getAttendance();
    dispatch({
      type: GET_ATTENDANCE,
      payload: data.result,
    });
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

export const getSubjects = () => async (dispatch) => {
  try {
    const { data } = await api.getSubjectsForStudent();
    dispatch({
      type: GET_SUBJECTS,
      payload: { subjects: data.result },
    });
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

export const getAttendanceData = () => async (dispatch) => {
  try {
    const attendance = await api.getAttendance();
    const subjects = await api.getSubjectsForStudent();
    dispatch({
      type: GET_ATTENDANCE_DATA,
      payload: {
        attendance: attendance.data.result,
        subjects: subjects.data.result,
      },
    });
  } catch (err) {
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        snackbarMessage: 'Error in fetching attendance',
        snackbarType: 'error',
      },
    });
  }
};

export const clearSubjectList = () => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_Subject_LIST,
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
