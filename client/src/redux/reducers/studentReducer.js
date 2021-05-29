import {
  STUDENT_LOGIN,
  STUDENT_LOGOUT,
  SET_STUDENT_DETAILS,
  GET_STUDENT_MARKS,
  GET_ATTENDANCE,
  GET_SUBJECTS,
} from '../actionsType';
import Cookies from 'js-cookie';

const initialState = {
  studentData: null,
  isAuthenticated: false,
  attendance: [],
  subjects: [],
  marksList: [],
  marksSearchedQuery: {
    examType: '',
    semester: '',
  },
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_LOGIN:
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

    case GET_STUDENT_MARKS:
      return {
        ...state,
        marksList: action?.payload?.marksList,
        marksSearchedQuery: action?.payload?.queryObj,
      };

    case STUDENT_LOGOUT:
      Cookies.remove('studentJWT');
      return initialState;

    case GET_ATTENDANCE:
      return {
        ...state,
        attendance: action.payload,
      };

    case GET_SUBJECTS:
      return {
        ...state,
        subjects: action?.payload?.subjects,
      };

    default:
      return state;
  }
};

export default studentReducer;
