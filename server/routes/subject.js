// Subject Routes
const express = require('express');
const router = express.Router();

const { getAllSubjects, addSubject } = require('../controllers/subject');

const { adminAuth } = require('../middleware/authMiddleware');

router.get('/all', adminAuth, getAllSubjects);
router.post('/add', adminAuth, addSubject);

module.exports = router;
