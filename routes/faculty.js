// Faculty Routes
const express = require('express');
const router = express.Router();
const { upload } = require('../middleware/multerMiddleware');

const {
  getFacultyDetails,
  getFaculties,
  addFaculty,
  updateFaculty,
  deleteFaculty,
} = require('../controllers/faculty');

const { facultyAuth, adminAuth } = require('../middleware/authMiddleware');

router.get('/all', adminAuth, getFaculties);
router.get('/', facultyAuth, getFacultyDetails);
router.patch('/update', facultyAuth, upload.single('newAvatar'), updateFaculty);
router.post('/add', adminAuth, addFaculty);
router.delete('/delete', adminAuth, deleteFaculty);

module.exports = router;
