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
  GET_ALL_SUBJECTS
} from '../actionsType';
import Cookies from 'js-cookie';

const initialState = {
  adminData: null,
  isAuthenticated: false,
  allFaculties: [],
  facultiesDepartment: '',
  allStudents: [],
  studentsDepartment: '',
  studentsYear: '',
  allSubjects: [],
  subjectsDepartment: '',
  subjectsSemester: ''
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN:
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

    case ADD_ADMIN:
    case ADD_FACULTY:
    case ADD_STUDENT:
    case ADD_SUBJECT:
      return state;

    case GET_FACULTIES:
      return {
        ...state,
        allFaculties: action.payload.faculties,
        facultiesDepartment: action.payload.department
      };

    case GET_STUDENTS:
      return {
        ...state,
        allStudents: action.payload.students,
        studentsDepartment: action.payload.department,
        studentsYear: action.payload.year
      };

    case GET_ALL_SUBJECTS:
      return {
        ...state,
        allSubjects: action.payload.subjects,
        subjectsDepartment: action.payload.department,
        subjectsSemester: action.payload.semester
      };

    default:
      return state;
  }
};

export default adminReducer;
