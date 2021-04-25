// Admin Routes
const express = require('express');
const router = express.Router();

const {
  getAdminDetails,
  addAdmin,
  updateProfile,
} = require('../controllers/admin');

const { adminAuth } = require('../middleware/authMiddleware');

router.get('/:id', adminAuth, getAdminDetails);
router.patch('/:id', adminAuth, updateProfile);
router.post('/add', adminAuth, addAdmin);

module.exports = router;
