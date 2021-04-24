// Student Routes
const express = require('express');
const router = express.Router();

const {
  getStudentDetails,
  getStudents,
  addStudent,
  updateProfile,
} = require('../controllers/student');

router.get('/fetch', getStudents);
router.get('/:id', getStudentDetails);
router.patch('/:id', updateProfile);
router.post('/add', addStudent);

module.exports = router;
