import { ADMIN_LOGIN, ADMIN_LOGOUT, SET_ADMIN_DETAILS } from '../actionsType';

import Cookies from 'js-cookie';
const adminReducer = (state = { adminData: null }, action) => {
  switch (action.type) {
    case ADMIN_LOGIN:
      // localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
      Cookies.set('adminJWT', action?.payload?.token, {
        expires: 7,
      });
      return { ...state, adminData: action?.payload?.userDetails };

    case SET_ADMIN_DETAILS:
      return { ...state, adminData: action?.payload };

    case ADMIN_LOGOUT:
      return { ...state, adminData: null };

    default:
      return state;
  }
};

export default adminReducer;
