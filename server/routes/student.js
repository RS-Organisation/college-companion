// Student Routes
const express = require('express');
const router = express.Router();

const {
	getStudentDetails,
	getStudents,
	addStudent
} = require('../controllers/student');

router.get('/fetch', getStudents);
router.get('/:id', getStudentDetails);
router.post('/add', addStudent);

module.exports = router;