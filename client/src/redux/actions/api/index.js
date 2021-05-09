import axios from 'axios';
import Cookies from 'js-cookie';

const API = axios.create({
  baseURL: 'http://localhost:5000/',
});

API.interceptors.request.use((req) => {
  if (Cookies.get('adminJWT')) {
    req.headers.authorization = `Bearer ${JSON.parse(Cookies.get('adminJWT'))}`;
  }
  if (Cookies.get('facultyJWT')) {
    req.headers.authorization = `Bearer ${JSON.parse(
      Cookies.get('facultyJWT')
    )}`;
  }
  if (Cookies.get('studentJWT')) {
    req.headers.authorization = `Bearer ${JSON.parse(
      Cookies.get('studentJWT')
    )}`;
  }
  return req;
});

// Admin Routes
export const adminLogin = (formData) => API.post('/auth/admin-login', formData);

// Faculty Routes
export const facultyLogin = (formData) =>
  API.post('/auth/faculty-login', formData);

// Student Routes
export const studentLogin = (formData) =>
  API.post('/auth/student-login', formData);
