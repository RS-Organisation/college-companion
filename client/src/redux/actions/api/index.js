import axios from 'axios';
import Cookies from 'js-cookie';

const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});
API.interceptors.request.use((req) => {
  if (Cookies.get('adminJWT')) {
    req.headers.authorization = `Bearer ${Cookies.get('adminJWT')}`;
  }
  if (Cookies.get('facultyJWT')) {
    req.headers.authorization = `Bearer ${Cookies.get('facultyJWT')}`;
  }
  if (Cookies.get('studentJWT')) {
    req.headers.authorization = `Bearer ${Cookies.get('studentJWT')}`;
  }
  return req;
});

const config = {
  headers: {
    'content-type': 'multipart/form-data',
  },
};

export const sendEmail = (formData) =>
  API.post('/auth/forgotPassword', formData);
export const resetPassword = (formData) =>
  API.get('/auth/resetPassword', { params: formData });
export const updatePasswordViaEmail = (formData) =>
  API.patch('/auth/updatePasswordViaEmail', formData);

// Admin Routes
export const getAdmin = () => API.get('/admin/');

export const adminLogin = (formData) => API.post('/auth/admin-login', formData);

export const addAdmin = (formData) => API.post('/admin/add', formData);

export const updateAdminDetails = (updates) =>
  API.patch('/admin/update', updates);

export const updateAdminImage = (updates) =>
  API.patch('/admin/update', updates, config);

// Faculty Routes
export const getFaculty = () => API.get('/faculty/');

export const getFaculties = (formData) =>
  API.get('/faculty/all', { params: formData });

export const facultyLogin = (formData) =>
  API.post('/auth/faculty-login', formData);

export const addFaculty = (formData) => API.post('/faculty/add', formData);

export const updateFacultyDetails = (updates) =>
  API.patch('/faculty/update', updates);

export const updateFacultyImage = (updates) =>
  API.patch('/faculty/update', updates, config);

// Student Routes
export const getStudent = () => API.get('/student/');

export const getStudents = (formData) =>
  API.get('/student/all', { params: formData });

export const getStudentsList = (formData) =>
  API.get('/student/fetch', { params: formData });

export const studentLogin = (formData) =>
  API.post('/auth/student-login', formData);

export const addStudent = (formData) => API.post('/student/add', formData);

export const updateStudentDetails = (updates) =>
  API.patch('/student/update', updates);

export const updateStudentImage = (updates) =>
  API.patch('/student/update', updates, config);

// Subject Routes
export const getSubjectsForAdmin = (formData) =>
  API.get('/subject/all', { params: formData });

export const getSubjectsForFaculty = (formData) =>
  API.get('/subject/getSubjects', { params: formData });

export const getSubjectsForStudent = () => API.get('/subject/');

export const addSubject = (formData) => API.post('/subject/add', formData);

// Attendance Routes
export const getAttendance = () => API.get('/attendance/');

export const markAttendance = (formData) =>
  API.post('/attendance/mark', formData);

// Marks Routes
export const getMarksOfStudent = (formData) =>
  API.get('/marks/', { params: formData });

export const uploadMarks = (formData) => API.post('/marks/upload', formData);
