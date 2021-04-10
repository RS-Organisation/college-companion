// Admin Routes
const express = require('express');
const router = express.Router();

const {
  getAllAdmins,
  getAdminDetails,
  getAllFaculty,
  getAllStudents,
  addAdmin,
  addFaculty,
  addStudent,
} = require('../controllers/admin');

router.get('/all', getAllAdmins);
router.get('/:id', getAdminDetails);
router.get('/allFaculty', getAllFaculty);
router.get('/allStudents', getAllStudents);
router.post('/addAdmin', addAdmin);
router.post('/addFaculty', addFaculty);
router.post('/addStudent', addStudent);

module.exports = router;
