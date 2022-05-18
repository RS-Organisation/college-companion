// Student Routes
const express = require('express');
const router = express.Router();
const { upload } = require('../middleware/multerMiddleware');

const {
  getStudentDetails,
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} = require('../controllers/student');

const {
  facultyAuth,
  studentAuth,
  adminAuth,
} = require('../middleware/authMiddleware');

router.get('/all', adminAuth, getStudents);
router.get('/fetch', facultyAuth, getStudents);
router.get('/', studentAuth, getStudentDetails);
router.patch('/update', studentAuth, upload.single('newAvatar'), updateStudent);
router.post('/add', adminAuth, addStudent);
router.delete('/delete', adminAuth, deleteStudent);

module.exports = router;
