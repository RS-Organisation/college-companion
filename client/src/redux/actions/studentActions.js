import * as api from './api';
import { format } from 'date-fns';

import {
  STUDENT_LOGIN,
  STUDENT_LOGOUT,
  SET_STUDENT_DETAILS,
  GET_STUDENT_MARKS,
  GET_ATTENDANCE,
  GET_SUBJECTS,
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

export const setStudentDetails = (history) => async (dispatch) => {
  try {
    const { data } = await api.getStudent();
    dispatch({
      type: SET_STUDENT_DETAILS,
      payload: { userDetails: data },
    });
    if (history.location.pathname === '/') {
      history.push('/student/');
    }
  } catch (err) {
    console.log(err);
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
  } catch (err) {
    console.log(err);
  }
};

export const updateStudentImage = (updates) => async (dispatch) => {
  try {
    const { data } = await api.updateStudentImage(updates);
    dispatch({
      type: SET_STUDENT_DETAILS,
      payload: data.result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getMarks = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getMarksOfStudent(formData);
    dispatch({
      type: GET_STUDENT_MARKS,
      payload: {
        marksList: data,
        queryObj: {
          examType: formData.examType,
          semester: formData.semester,
        },
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAttendance = () => async (dispatch) => {
  try {
    const { data } = await api.getAttendance();
    dispatch({
      type: GET_ATTENDANCE,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSubjects = () => async (dispatch) => {
  try {
    const subjects = await api.getSubjectsForStudent();
    dispatch({
      type: GET_SUBJECTS,
      payload: { subjects: subjects.data },
    });
  } catch (err) {
    console.log(err);
  }
};
