const Faculty = require('../models/faculty');
const mongoose = require('mongoose');
const { generateRegistrationNumber } = require('../util/helperFunctions');

// GET ROUTES

// const getFacultyDetails = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const faculty = await Faculty.findById(id);
//     res.status(200).json(faculty);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

const getFaculties = async (req, res) => {
  try {
    const faculties = await Faculty.find(req.query);
    res.status(200).json(faculties);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// POST ROUTES

const addFaculty = async (req, res) => {
  const details = req.body;
  try {
    const count = await Faculty.countDocuments({});
    const prefix = 'FAC';
    var registrationNumber = generateRegistrationNumber(
      prefix,
      details.joiningYear,
      count + 1
    );

    const newFaculty = new Faculty({
      ...details,
      password: details.dob,
      registrationNumber,
    });

    await newFaculty.save();
    res.status(201).json({ message: 'New faculty added successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE ROUTE

const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedDetails = await Faculty.findByIdAndUpdate(id, updates, { new: true });
    res.status(201).json({ message: 'Faculty details updated successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete Route
const deleteFaculty = async (req, res) => {
  try {
    const { registrationNumber } = req.body;
    await Faculty.findOneAndRemove({ registrationNumber });
    res.json({ message: 'Faculty deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  // getFacultyDetails,
  getFaculties,
  addFaculty,
  updateProfile,
  deleteFaculty,
};
