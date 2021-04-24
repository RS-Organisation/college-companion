// Attendance Routes
const express = require('express');
const router = express.Router();

const {
	getAttendanceById,
    getAttendanceOfAll,
    markAttendance
} = require('../controllers/attendance');

router.get('/all', getAttendanceOfAll);     
router.get('/:id', getAttendanceById);
router.post('/mark', markAttendance);

module.exports = router;