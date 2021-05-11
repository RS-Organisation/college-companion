// Student Routes
const express = require('express');
const router = express.Router();

const {
  // getStudentDetails,
  getStudents,
  addStudent,
  updateProfile,
  deleteStudent,
} = require('../controllers/student');

const {
  facultyAuth,
  studentAuth,
  adminAuth,
} = require('../middleware/authMiddleware');

router.get('/all', facultyAuth, getStudents);
// router.get('/:id', studentAuth, getStudentDetails);
router.patch('/:id', studentAuth, updateProfile);
router.post('/add', adminAuth, addStudent);
router.delete('/delete', adminAuth, deleteStudent);

module.exports = router;
