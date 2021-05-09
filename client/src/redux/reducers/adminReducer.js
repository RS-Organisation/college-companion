import { ADMIN_LOGIN, ADMIN_LOGOUT, SET_ADMIN_DETAILS } from '../actionsType';
import Cookies from 'js-cookie';

const initialState = {
  adminData: null,
  isAuthenticated: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN:
      // localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
      Cookies.set('adminJWT', action?.payload?.token, {
        expires: 7,
      });
      return {
        ...state,
        adminData: action?.payload?.userDetails,
        isAuthenticated: true,
      };

    case SET_ADMIN_DETAILS:
      return {
        ...state,
        adminData: action?.payload,
        isAuthenticated: true,
      };

    case ADMIN_LOGOUT:
      Cookies.remove('adminJWT');
      return { ...state, adminData: null, isAuthenticated: false };

    default:
      return state;
  }
};

export default adminReducer;
