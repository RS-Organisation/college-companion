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
  GET_ALL_SUBJECTS,
  SET_SNACKBAR,
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
    // console.log(err);
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        snackbarMessage: err.response.data.message,
        snackbarType: 'error',
      },
    });
  }
};

export const adminLogout = (history) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_LOGOUT,
    });
    history.push('/admin/login');
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

export const setAdminDetails = (history) => async (dispatch) => {
  try {
    const { data } = await api.getAdmin();
    dispatch({
      type: SET_ADMIN_DETAILS,
      payload: data.result,
    });
    if (history.location.pathname === '/') {
      history.push('/admin/');
    }
  } catch (err) {
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        snackbarMessage: err.response.data.message,
        snackbarType: 'error',
      },
    });
  }
};

export const addAdmin = (formData) => async (dispatch) => {
  try {
    const data = { ...formData, dob: format(formData.dob, 'dd-MM-yyyy') };
    const res = await api.addAdmin(data);
    dispatch({ type: ADD_ADMIN });
    if (res.data.success) {
      dispatch({
        type: SET_SNACKBAR,
        payload: {
          snackbarMessage: res.data.message,
          snackbarType: 'success',
        },
      });
    }
  } catch (err) {
    // console.log(err);
    // console.log(err.message);
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        snackbarMessage: err.response.data.message,
        snackbarType: 'error',
      },
    });
  }
};

export const addFaculty = (formData) => async (dispatch) => {
  try {
    const data = { ...formData, dob: format(formData.dob, 'dd-MM-yyyy') };
    const res = await api.addFaculty(data);
    dispatch({ type: ADD_FACULTY });
    if (res.data.success) {
      dispatch({
        type: SET_SNACKBAR,
        payload: {
          snackbarMessage: res.data.message,
          snackbarType: 'success',
        },
      });
    }
  } catch (err) {
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        snackbarMessage: err.response.data.message,
        snackbarType: 'error',
      },
    });
  }
};

export const addStudent = (formData) => async (dispatch) => {
  try {
    const data = { ...formData, dob: format(formData.dob, 'dd-MM-yyyy') };
    const res = await api.addStudent(data);
    dispatch({ type: ADD_STUDENT });
    if (res.data.success) {
      dispatch({
        type: SET_SNACKBAR,
        payload: {
          snackbarMessage: res.data.message,
          snackbarType: 'success',
        },
      });
    }
  } catch (err) {
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        snackbarMessage: err.response.data.message,
        snackbarType: 'error',
      },
    });
  }
};

export const addSubject = (formData) => async (dispatch) => {
  try {
    const res = await api.addSubject(formData);
    dispatch({ type: ADD_SUBJECT });
    if (res.data.success) {
      dispatch({
        type: SET_SNACKBAR,
        payload: {
          snackbarMessage: res.data.message,
          snackbarType: 'success',
        },
      });
    }
  } catch (err) {
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        snackbarMessage: err.response.data.message,
        snackbarType: 'error',
      },
    });
  }
};

export const getFaculties = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getFaculties(formData);
    dispatch({
      type: GET_FACULTIES,
      payload: {
        faculties: data.result,
        department: formData.department,
      },
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
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        snackbarMessage: err.response.data.message,
        snackbarType: 'error',
      },
    });
  }
};

export const getStudents = (formData) => async (dispatch) => {
  try {
    const { department, year } = formData;
    const { data } = await api.getStudents(formData);
    dispatch({
      type: GET_STUDENTS,
      payload: {
        students: data.result,
        department,
        year,
      },
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
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        snackbarMessage: err.response.data.message,
        snackbarType: 'error',
      },
    });
  }
};

export const getSubjects = (formData) => async (dispatch) => {
  try {
    const { department, semester } = formData;
    const { data } = await api.getSubjectsForAdmin(formData);
    dispatch({
      type: GET_ALL_SUBJECTS,
      payload: {
        subjects: data.result,
        department,
        semester,
      },
    });
    if (data?.success) {
      dispatch({
        type: SET_SNACKBAR,
        payload: {
          snackbarMessage: data.message,
          snackbarType: 'success',
        },
      });
    }
  } catch (err) {
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        snackbarMessage: err.response.data.message,
        snackbarType: 'error',
      },
    });
  }
};

export const updateAdminDetails = (updates) => async (dispatch) => {
  try {
    var updatedData = { ...updates };
    if (updates?.dob) {
      updatedData = {
        ...updatedData,
        dob: format(updates.dob, 'dd-MM-yyyy'),
      };
    }
    const { data } = await api.updateAdminDetails(updatedData);
    dispatch({
      type: SET_ADMIN_DETAILS,
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
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        snackbarMessage: err.response.data.message,
        snackbarType: 'error',
      },
    });
  }
};

export const updateAdminImage = (updates) => async (dispatch) => {
  try {
    const { data } = await api.updateAdminImage(updates);
    dispatch({
      type: SET_ADMIN_DETAILS,
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
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        snackbarMessage: err.response.data.message,
        snackbarType: 'error',
      },
    });
  }
};
