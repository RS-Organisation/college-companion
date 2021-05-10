const Faculty = require('../models/faculty');
const mongoose = require('mongoose');
const { generateRegistrationNumber } = require('../util/helperFunctions');

// GET ROUTES

const getFacultyDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const details = await Faculty.findById(id);
    delete details.password;
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
    var registrationNumber = generateRegistrationNumber(
      prefix,
      details.joiningYear,
      count + 1
    );

    const checkExisting = await Faculty.findOne({ registrationNumber });

    if (checkExisting) {
      const last = await Faculty.findOne({}).sort({ createdAt: -1 }).limit(1);
      const newCount = parseInt(last.registrationNumber.slice(-3));
      registrationNumber = generateRegistrationNumber(
        prefix,
        details.joiningYear,
        newCount + 1
      );
    }

    const newFaculty = new Faculty({
      ...details,
      password: details.dob,
      registrationNumber,
    });

    await newFaculty.save();
    delete newFaculty.password;
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
    const updatedDetails = await Faculty.findByIdAndUpdate(
      id, updates, { new: true }
    );
    delete updatedDetails.password;
    res.status(201).json(updatedDetails);
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
  getFacultyDetails,
  getAllFaculty,
  addFaculty,
  updateProfile,
  deleteFaculty,
};
