// Auth Routes
const express = require('express');
const router = express.Router();

const {
  adminLogin,
  studentLogin,
  facultyLogin,
  forgotPassword,
  resetPassword,
  updatePasswordViaEmail
} = require('../controllers/auth');

router.post('/admin-login', adminLogin);
router.post('/student-login', studentLogin);
router.post('/faculty-login', facultyLogin);
router.post('/forgotPassword', forgotPassword);
router.get('/resetPassword', resetPassword);
router.patch('/updatePasswordViaEmail', updatePasswordViaEmail);

module.exports = router;
