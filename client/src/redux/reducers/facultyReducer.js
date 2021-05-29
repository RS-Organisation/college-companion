import {
  FACULTY_LOGIN,
  FACULTY_LOGOUT,
  SET_FACULTY_DETAILS,
  GET_STUDENT_LIST,
  CLEAR_STUDENT_LIST,
  MARK_ATTENDANCE,
  UPLOAD_MARKS,
} from '../actionsType';
import Cookies from 'js-cookie';

const initialState = {
  facultyData: null,
  isAuthenticated: false,
  studentsList: [],
  subjectsList: [],
  searchQueryForStudents: {},
  markAttendanceFlag: false,
  uploadMarksFlag: false,
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
        subjectsList: action?.payload?.subjectsList,
        searchQueryForStudents: action?.payload?.searchQuery,
        markAttendanceFlag: true,
        uploadMarksFlag: true,
      };

    case CLEAR_STUDENT_LIST:
      return {
        ...state,
        studentsList: [],
        subjectsList: [],
        searchQueryForStudents: {},
        markAttendanceFlag: false,
        uploadMarksFlag: false,
      };

    case FACULTY_LOGOUT:
      Cookies.remove('facultyJWT');
      return initialState;

    case MARK_ATTENDANCE:
      return state;

    case UPLOAD_MARKS:
      return state;

    default:
      return state;
  }
};

export default facultyReducer;
