const Admin = require('../models/admin');
const mongoose = require('mongoose');
const { generateRegistrationNumber } = require('../util/helperFunctions');

// GET ROUTES

const getAdminDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const details = await Admin.findById(id);
    delete details.password;
    res.status(200).json(details);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getAllAdminDetails = async (req, res) => {
  try {
    const details = await Admin.find({});
    // delete details.password;
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
    var registrationNumber = generateRegistrationNumber(
      prefix,
      details.joiningYear,
      count + 1
    );

    const checkExisting = await Admin.findOne({ registrationNumber });

    if (checkExisting) {
      const last = await Admin.findOne({}).sort({ createdAt: -1 }).limit(1);
      const newCount = parseInt(last.registrationNumber.slice(-3));
      registrationNumber = generateRegistrationNumber(
        prefix,
        details.joiningYear,
        newCount + 1
      );
    }

    const newAdmin = new Admin({
      ...details,
      password: details.dob,
      registrationNumber,
    });

    await newAdmin.save();
    res.status(201).json({ message: 'Admin created successfully.' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE ROUTE

const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedDetails = await Admin.findByIdAndUpdate(
      id, updates, { new: true }
    );
    delete updatedDetails.password;
    res.status(201).json(updatedDetails);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete Route
const deleteAdmin = async (req, res) => {
  try {
    const { registrationNumber } = req.body;
    await Admin.findOneAndRemove({ registrationNumber });
    res.json({ message: 'Admin deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllAdminDetails,
  getAdminDetails,
  addAdmin,
  updateProfile,
  deleteAdmin,
};
