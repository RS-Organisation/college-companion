// Admin Routes
const express = require('express');
const router = express.Router();

const {
  // getAdminDetails,
  addAdmin,
  updateProfile,
  updatePassword,
  deleteAdmin,
} = require('../controllers/admin');

const { adminAuth } = require('../middleware/authMiddleware');

// router.get('/:id', adminAuth, getAdminDetails);
router.patch('/updateProfile', adminAuth, updateProfile);
router.patch('/updatePassword', adminAuth, updatePassword);
router.post('/add', adminAuth, addAdmin);
router.delete('/delete', adminAuth, deleteAdmin);

module.exports = router;
