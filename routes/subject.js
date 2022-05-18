// Subject Routes
const express = require('express');
const router = express.Router();

const { getAllSubjects, addSubject } = require('../controllers/subject');

const {
  adminAuth,
  studentAuth,
  facultyAuth,
} = require('../middleware/authMiddleware');

router.get('/', studentAuth, getAllSubjects);
router.get('/getSubjects', facultyAuth, getAllSubjects);
router.get('/all', adminAuth, getAllSubjects);
router.post('/add', adminAuth, addSubject);

module.exports = router;
