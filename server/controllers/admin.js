const Admin = require('../models/admin');
const mongoose = require('mongoose');
const { generateRegistrationNumber } = require('../util/helperFunctions');

// GET ROUTES

const getAdminDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const details = await Admin.findById(id);
    res.status(200).json(details);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// POST ROUTES

const addAdmin = async (req, res) => {
  const details = req.body;
  try {
    const count = await Admin.countDocuments({});
    const prefix = 'ADM';
    const registrationNumber = generateRegistrationNumber(
      prefix,
      details.joiningYear,
      count + 1
    );
    const newAdmin = new Admin({
      ...details,
      password: details.dob,
      registrationNumber,
    });
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE ROUTE

const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedDetails = await Admin.findByIdAndUpdate(id, updates, { new: true });
    res.status(201).json(updatedDetails);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAdminDetails,
  addAdmin,
  updateProfile,
};
