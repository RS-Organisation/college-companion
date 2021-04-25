// Faculty Routes
const express = require('express');
const router = express.Router();

const {
  getFacultyDetails,
  getAllFaculty,
  addFaculty,
  updateProfile,
} = require('../controllers/faculty');

const { facultyAuth, adminAuth } = require('../middleware/authMiddleware');

router.get('/all', adminAuth, getAllFaculty);
router.get('/:id', facultyAuth, getFacultyDetails);
router.patch('/:id', facultyAuth, updateProfile);
router.post('/add', adminAuth, addFaculty);

module.exports = router;
