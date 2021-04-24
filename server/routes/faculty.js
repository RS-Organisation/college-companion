// Faculty Routes
const express = require('express');
const router = express.Router();

const {
  getFacultyDetails,
  getAllFaculty,
  addFaculty,
  updateProfile,
} = require('../controllers/faculty');

router.get('/all', getAllFaculty);
router.get('/:id', getFacultyDetails);
router.patch('/:id', updateProfile);
router.post('/add', addFaculty);

module.exports = router;
