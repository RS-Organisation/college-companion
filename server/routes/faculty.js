// Faculty Routes
const express = require('express');
const router = express.Router();

const {
    getFacultyDetails,
    getAllFaculty,
    addFaculty,
} = require('../controllers/faculty');

router.get('/all', getAllFaculty);
router.get('/:id', getFacultyDetails);
router.post('/add', addFaculty);

module.exports = router;