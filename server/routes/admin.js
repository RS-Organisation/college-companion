// Admin Routes
const express = require('express');
const router = express.Router();

const { getAdminDetails, createAdmin } = require('../controllers/admin');

router.get('/:id', getAdminDetails);
router.post('/create', createAdmin);

module.exports = router;
