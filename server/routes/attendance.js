// Attendance Routes
const express = require('express');
const router = express.Router();

const {
  getAttendanceById,
  getAttendanceOfAll,
  markAttendance,
} = require('../controllers/attendance');

const { facultyAuth, studentAuth } = require('../middleware/authMiddleware');

router.get('/', studentAuth, getAttendanceById);
router.get('/all', facultyAuth, getAttendanceOfAll);
router.post('/mark', facultyAuth, markAttendance);

module.exports = router;
