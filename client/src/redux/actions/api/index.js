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

export const adminLogin = (formData) =>
  API.post('/auth/admin-login', formData);

export const addAdmin = (formData) =>
  API.post('/admin/add', formData);

// Faculty Routes

export const facultyLogin = (formData) =>
  API.post('/auth/faculty-login', formData);

export const addFaculty = (formData) =>
  API.post('/faculty/add', formData);

// Student Routes

export const studentLogin = (formData) =>
  API.post('/auth/student-login', formData);

export const addStudent = (formData) =>
  API.post('/student/add', formData);
