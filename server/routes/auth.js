// Admin Routes
const express = require('express');
const router = express.Router();

const {
  adminLogin,
  studentLogin,
  facultyLogin,
  logoutAdmin,
  logoutFaculty,
  logoutStudent,
} = require('../controllers/auth');

router.post('/admin-login', adminLogin);
router.post('/student-login', studentLogin);
router.post('/faculty-login', facultyLogin);
router.get('/logoutAdmin', logoutAdmin);
router.get('/logoutFaculty', logoutFaculty);
router.get('/logoutStudent', logoutStudent);

module.exports = router;
