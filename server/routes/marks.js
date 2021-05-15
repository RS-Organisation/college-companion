// Marks Routes
const express = require('express');
const router = express.Router();

const {
  getMarksOfAll,
  getMarksById,
  uploadMarks,
} = require('../controllers/marks');

const { facultyAuth, studentAuth } = require('../middleware/authMiddleware');

router.get('/', studentAuth, getMarksById);
router.get('/all', facultyAuth, getMarksOfAll);
router.post('/upload', facultyAuth, uploadMarks);

module.exports = router;
