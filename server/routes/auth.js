// Admin Routes
const express = require('express');
const router = express.Router();

const {
  adminLogin,
  studentLogin,
  facultyLogin,
  logOut
} = require('../controllers/auth');

router.post('/admin-login', adminLogin);
router.post('/student-login', studentLogin);
router.post('/faculty-login', facultyLogin);
router.get('/logout', logOut);

module.exports = router;
