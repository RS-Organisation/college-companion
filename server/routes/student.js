// Student Routes
const express = require('express');
const router = express.Router();

const {
  // getStudentDetails,
  getStudents,
  addStudent,
  updateProfile,
  updatePassword,
  deleteStudent,
} = require('../controllers/student');

const {
  facultyAuth,
  studentAuth,
  adminAuth,
} = require('../middleware/authMiddleware');

router.get('/all', adminAuth, getStudents);
// router.get('/:id', studentAuth, getStudentDetails);
router.patch('/updateProfile', studentAuth, updateProfile);
router.patch('/updatePassword', studentAuth, updatePassword);
router.post('/add', adminAuth, addStudent);
router.delete('/delete', adminAuth, deleteStudent);

module.exports = router;
