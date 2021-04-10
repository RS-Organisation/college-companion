// Student Routes
const express = require('express');
const router = express.Router();

const {
	getStudentDetails,
	getAllStudents,
	addStudent
} = require('../controllers/student');

router.get('/all', getAllStudents);
router.get('/:id', getStudentDetails);
router.post('/add', addStudent);

module.exports = router;