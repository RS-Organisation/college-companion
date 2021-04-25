// Student Routes
const express = require('express');
const router = express.Router();

const {
  getStudentDetails,
  getStudents,
  addStudent,
  updateProfile,
} = require('../controllers/student');

const {
  facultyAuth,
  studentAuth,
  adminAuth,
} = require('../middleware/authMiddleware');

router.get('/fetch', facultyAuth, getStudents);
router.get('/:id', studentAuth, getStudentDetails);
router.patch('/:id', studentAuth, updateProfile);
router.post('/add', adminAuth, addStudent);

module.exports = router;
