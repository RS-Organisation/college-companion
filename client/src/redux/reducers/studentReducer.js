import {
  STUDENT_LOGIN,
  STUDENT_LOGOUT,
  SET_STUDENT_DETAILS,
  SET_ADDITIONAL_DETAILS,
  GET_MARKS_OF_STUDENT,
  // GET_ATTENDANCE,
} from '../actionsType';
import Cookies from 'js-cookie';

const initialState = {
  studentData: null,
  isAuthenticated: false,
  attendance: [],
  subjectsList: [],
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
        subjectsList: action?.payload?.subjects,
        attendance: action?.payload?.attendance,
      };

    case SET_STUDENT_DETAILS:
      return {
        ...state,
        studentData: action?.payload.userDetails,
        isAuthenticated: true,
        subjectsList: action?.payload?.subjects,
        attendance: action?.payload?.attendance,
      };

    case GET_MARKS_OF_STUDENT:
      return {
        ...state,
        marksList: action?.payload?.marksList,
        marksSearchedQuery: action?.payload?.queryObj,
      };

    case STUDENT_LOGOUT:
      Cookies.remove('studentJWT');
      return initialState;

    // case GET_ATTENDANCE:
    //   return {
    //     ...state,
    //     attendance: action.payload,
    //   };

    default:
      return state;
  }
};

export default studentReducer;
