// Admin Routes
const express = require('express');
const router = express.Router();

const {
	getAdminDetails,
	addAdmin,
} = require('../controllers/admin');

router.get('/:id', getAdminDetails);
router.post('/add', addAdmin);

module.exports = router;
