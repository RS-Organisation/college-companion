// Marks Routes
const express = require('express');
const router = express.Router();

const {
  getMarksOfAll,
  getMarksById,
  uploadMarks,
} = require('../controllers/marks');

router.get('/all', getMarksOfAll); //get marks of particular subject for all students (For Faculty)
router.get('/:id', getMarksById); // get marks of all subjects for a particular student (For Students)
router.post('/upload', uploadMarks);

module.exports = router;
