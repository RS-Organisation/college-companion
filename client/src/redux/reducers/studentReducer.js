import {
  STUDENT_LOGIN,
  STUDENT_LOGOUT,
  SET_STUDENT_DETAILS,
} from '../actionsType';
import Cookies from 'js-cookie';

const initialState = {
  studentData: null,
  isAuthenticated: false,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_LOGIN:
      // localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
      Cookies.set('studentJWT', action?.payload?.token, {
        expires: 7,
      });
      return {
        ...state,
        studentData: action?.payload?.userDetails,
        isAuthenticated: true,
      };

    case SET_STUDENT_DETAILS:
      return {
        ...state,
        studentData: action?.payload,
        isAuthenticated: true,
      };

    case STUDENT_LOGOUT:
      Cookies.remove('studentJWT');
      return { ...state, studentData: null, isAuthenticated: false };

    default:
      return state;
  }
};

export default studentReducer;
