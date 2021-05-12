import {
  FACULTY_LOGIN,
  FACULTY_LOGOUT,
  SET_FACULTY_DETAILS,
  GET_STUDENT_LIST,
  CLEAR_STUDENT_LIST,
} from '../actionsType';
import Cookies from 'js-cookie';

const initialState = {
  facultyData: null,
  isAuthenticated: false,
  studentsList: [],
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

    case GET_STUDENT_LIST:
      return {
        ...state,
        studentsList: action?.payload?.studentsList,
      };

    case CLEAR_STUDENT_LIST:
      return {
        ...state,
        studentsList: [],
      };

    case FACULTY_LOGOUT:
      Cookies.remove('facultyJWT');
      return { ...state, facultyData: null, isAuthenticated: false };

    default:
      return state;
  }
};

export default facultyReducer;
