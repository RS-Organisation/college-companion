// Subject Routes
const express = require('express');
const router = express.Router();

const {
	getAllSubjects,
	addSubject
} = require('../controllers/subject');

router.get('/all', getAllSubjects);
router.post('/add', addSubject);

module.exports = router;