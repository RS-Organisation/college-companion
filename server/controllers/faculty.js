const Faculty = require('../models/faculty');
const mongoose = require('mongoose');

// Function to Generate Registration Number for Faculty
const generateRegistrationNumber = (prefix, joiningYear, count) => {
  var registrationNumber = '';
  if (count < 10) {
    registrationNumber = prefix + '00' + String(count) + String(joiningYear);
  } else if (count < 100) {
    registrationNumber = prefix + '0' + String(count) + String(joiningYear);
  } else {
    registrationNumber = prefix + String(count) + String(joiningYear);
  }
  return registrationNumber;
};

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
    const prefix = 'ADM';
    const registrationNumber = generateRegistrationNumber(
      prefix,
      details.joiningYear,
      count + 1
    );
    const newFaculty = new Faculty({
      ...details,
      registrationNumber,
      createdAt: new Date().toISOString(),
    });
    await newFaculty.save();
    console.log(registrationNumber);
    res.status(201).json(newFaculty);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

module.exports = {
  getFacultyDetails,
  getAllFaculty,
  addFaculty,
};
