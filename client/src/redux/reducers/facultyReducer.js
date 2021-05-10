import {
  FACULTY_LOGIN,
  FACULTY_LOGOUT,
  SET_FACULTY_DETAILS,
} from '../actionsType';
import Cookies from 'js-cookie';

const initialState = {
  facultyData: null,
  isAuthenticated: false,
};

const facultyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FACULTY_LOGIN:
      Cookies.set('facultyJWT', action?.payload?.token, {
        expires: 7,
      });
      return {
        ...state,
        facultyData: action?.payload?.userDetails,
        isAuthenticated: true,
      };

    case SET_FACULTY_DETAILS:
      return {
        ...state,
        facultyData: action?.payload,
        isAuthenticated: true,
      };

    case FACULTY_LOGOUT:
      Cookies.remove('facultyJWT');
      return { ...state, facultyData: null, isAuthenticated: false };

    default:
      return state;
  }
};

export default facultyReducer;
