const Faculty = require('../models/faculty');
const mongoose = require('mongoose');
const { generateRegistrationNumber } = require('../util/helperFunctions');

// GET ROUTES

const getFacultyDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const details = await Faculty.findById(id);
    res.status(200).json(details);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getAllFaculty = async (req, res) => {
  try {
    const details = await Faculty.find({});
    res.status(200).json(details);
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
    const registrationNumber = generateRegistrationNumber(
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
    res.status(201).json(newFaculty);
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
    res.status(201).json(updatedDetails);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getFacultyDetails,
  getAllFaculty,
  addFaculty,
  updateProfile,
};
