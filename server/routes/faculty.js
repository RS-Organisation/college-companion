// Faculty Routes
const express = require('express');
const router = express.Router();

const {
  // getFacultyDetails,
  getFaculties,
  addFaculty,
  updateProfile,
  deleteFaculty,
} = require('../controllers/faculty');

const { facultyAuth, adminAuth } = require('../middleware/authMiddleware');

router.get('/all', getFaculties);
// router.get('/:id', facultyAuth, getFacultyDetails);
router.patch('/:id', facultyAuth, updateProfile);
router.post('/add', adminAuth, addFaculty);
router.delete('/delete', adminAuth, deleteFaculty);

module.exports = router;
