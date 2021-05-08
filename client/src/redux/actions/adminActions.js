import * as api from './api';

import { ADMIN_LOGIN, ADMIN_LOGOUT, SET_ADMIN_DETAILS } from '../actionsType';

export const login = (formData, history) => async (dispatch) => {
  try {
    console.log(formData);
    const { data } = await api.adminLogin(formData);
    console.log('logged in user details', data);
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
    history.push('/');
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
