// Marks Routes
const express = require('express');
const router = express.Router();

const { uploadMarks } = require('../controllers/marks');

router.post('/uploadMarks', uploadMarks);

module.exports = router;
