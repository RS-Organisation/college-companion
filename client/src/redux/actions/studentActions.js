import * as api from './api';
import { format } from 'date-fns';

import {
  STUDENT_LOGIN,
  STUDENT_LOGOUT,
  SET_STUDENT_DETAILS,
  SET_ADDITIONAL_DETAILS,
  GET_MARKS_OF_STUDENT,
  // GET_ATTENDANCE,
} from '../actionsType';

export const studentLogin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.studentLogin(formData);
    dispatch({
      type: STUDENT_LOGIN,
      payload: { userDetails: data.result, token: data.token },
    });
    history.push('/student');
    setAdditionalDetails();
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

export const setAdditionalDetails = () => async (dispatch) => {
  try {
    const attendance = await api.getAttendance();
    const subjects = await api.getSubjectsForStudent();

    dispatch({
      type: SET_ADDITIONAL_DETAILS,
      payload: {
        attendance: attendance.data,
        subjects: subjects.data,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const setStudentDetails = (history) => async (dispatch) => {
  try {
    const { data } = await api.getStudent();
    dispatch({
      type: SET_STUDENT_DETAILS,
      payload: data,
    });
    if (history.location.pathname === '/') {
      history.push('/student/');
    }
    setAdditionalDetails();
  } catch (err) {
    console.log(err);
  }
};

// export const updateProfile = (updates) => async (dispatch) => {
//   try {
//     const { data } = await api.updateStudentProfile(updates);
//     console.log(data);
//     dispatch({
//       type: SET_STUDENT_DETAILS,
//       payload: data.result,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const updatePassword = (updates) => async (dispatch) => {
//   try {
//     const { data } = await api.updateStudentPassword(updates);
//     dispatch({
//       type: SET_STUDENT_DETAILS,
//       payload: data.result,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

export const updateStudent = (updates) => async (dispatch) => {
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
    const { data } = await api.updateStudent(updatedData);
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
    console.log(data);
    dispatch({
      type: GET_MARKS_OF_STUDENT,
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

// export const getAttendance = () => async (dispatch) => {
//   try {
//     const { data } = await api.getAttendance();
//     dispatch({
//       type: GET_ATTENDANCE,
//       payload: data,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
