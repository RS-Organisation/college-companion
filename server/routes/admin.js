// Admin Routes
const express = require('express');
const router = express.Router();

const {
  getAdminDetails,
  addAdmin,
  updateProfile,
} = require('../controllers/admin');

router.get('/:id', getAdminDetails);
router.patch('/:id', updateProfile);
router.post('/add', addAdmin);

module.exports = router;
