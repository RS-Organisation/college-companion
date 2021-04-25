// Marks Routes
const express = require('express');
const router = express.Router();

const {
  getMarksOfAll,
  getMarksById,
  uploadMarks,
} = require('../controllers/marks');

const { facultyAuth, studentAuth } = require('../middleware/authMiddleware');

router.get('/all', facultyAuth, getMarksOfAll); //get marks of particular subject for all students (For Faculty)
router.get('/:id', studentAuth, getMarksById); // get marks of all subjects for a particular student (For Students)
router.post('/upload', facultyAuth, uploadMarks);

module.exports = router;
