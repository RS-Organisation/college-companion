const mongoose = require('mongoose');
const Faculty = require('../models/faculty');
const { generateRegistrationNumber } = require('../util/helperFunctions');

// GET ROUTES

const getFacultyDetails = async (req, res) => {
  try {
    const { _id } = req.facultyDetails;
    const faculty = await Faculty.findById(_id);
    res.status(200).json(faculty);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

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

// PATCH ROUTES

const updateFaculty = async (req, res) => {
  try {
    var updates = req.file ? { avatar: req.file.filename } : req.body;
    const { _id } = req.facultyDetails;

    if (updates.password) {
      const hashedPassword = await bcrypt.hash(updates.password, 12);
      updates.password = hashedPassword;
    }
    
    const updatedDetails = await Faculty.findByIdAndUpdate(_id, updates, { new: true });
    res.status(200).json({
      result: updatedDetails,
      message: 'Faculty details updated successfully',
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE ROUTES

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
  getFacultyDetails,
  getFaculties,
  addFaculty,
  updateFaculty,
  deleteFaculty,
};
