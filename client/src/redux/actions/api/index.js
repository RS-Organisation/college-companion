import axios from 'axios';
import Cookies from 'js-cookie';

const API = axios.create({
  baseURL: 'http://localhost:5000',
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

// Admin Routes

export const adminLogin = (formData) => API.post('/auth/admin-login', formData);

export const addAdmin = (formData) => API.post('/admin/add', formData);

export const updateProfile = (updates) =>
  API.patch('/admin/updateProfile', updates);

export const updatePassword = (updates) =>
  API.patch('/admin/updatePassword', updates);

// Faculty Routes

export const facultyLogin = (formData) =>
  API.post('/auth/faculty-login', formData);

export const addFaculty = (formData) => API.post('/faculty/add', formData);

export const getFaculties = (formData) =>
  API.get('/faculty/all', { params: formData });

// Student Routes

export const studentLogin = (formData) =>
  API.post('/auth/student-login', formData);

export const addStudent = (formData) => API.post('/student/add', formData);

export const getStudents = (formData) =>
  API.get('/student/all', { params: formData });

export const updateStudentProfile = (updates) =>
  API.patch('/student/updateProfile', updates);

export const updateStudentPassword = (updates) =>
  API.patch('/student/updatePassword', updates);

// Subject Routes

export const addSubject = (formData) => API.post('/subject/add', formData);

export const getSubjects = (formData) =>
  API.get('/subject/all', { params: formData });
