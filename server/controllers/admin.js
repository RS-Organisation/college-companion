const Admin = require('../models/admin');
const mongoose = require('mongoose');

// Function to Generate Registration Number for Admin
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
    const prefix = 'FAC';
    const registrationNumber = generateRegistrationNumber(
      prefix,
      details.joiningYear,
      count + 1
    );
    const newAdmin = new Admin({
      ...details,
      registrationNumber,
      createdAt: new Date().toISOString(),
    });
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

module.exports = {
  getAdminDetails,
  addAdmin,
};
