// Admin Routes
const express = require('express');
const router = express.Router();

const {
  getAdminDetails,
  addAdmin,
  updateAdmin,
  deleteAdmin,
} = require('../controllers/admin');

const { adminAuth } = require('../middleware/authMiddleware');

router.get('/', adminAuth, getAdminDetails);
router.patch('/update', adminAuth, updateAdmin);
router.post('/add', adminAuth, addAdmin);
router.delete('/delete', adminAuth, deleteAdmin);

module.exports = router;
