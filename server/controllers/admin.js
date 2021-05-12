const Admin = require('../models/admin');
const mongoose = require('mongoose');
const { generateRegistrationNumber } = require('../util/helperFunctions');

const bcrypt = require('bcryptjs');

// GET ROUTES

const getAdminDetails = async (req, res) => {
  try {
    const { _id } = req.adminDetails;
    const admin = await Admin.findById(_id);
    // const adminDetails = req.adminDetails;
    res.status(200).json(admin);
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
    res.status(201).json({ message: 'New admin added successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE ROUTE

// const updateProfile = async (req, res) => {
//   try {
//     const updates = req.body;
//     const { _id } = req.adminDetails;
//     const updatedDetails = await Admin.findByIdAndUpdate(_id, updates, {
//       new: true,
//     });
//     res.status(200).json({
//       result: updatedDetails,
//       message: 'Admin details updated successfully',
//     });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

const updateAdmin = async (req, res) => {
  try {
    const updates = req.body;
    const { _id } = req.adminDetails;
    if (updates.password) {
      const hashedPassword = await bcrypt.hash(updates.password, 12);
      updates.password = hashedPassword;
    }
    const updatedDetails = await Admin.findByIdAndUpdate(_id, updates, { new: true });
    res.status(200).json({
      result: updatedDetails,
      message: 'Admin details updated successfully',
    });
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
  getAdminDetails,
  addAdmin,
  updateAdmin,
  deleteAdmin,
};
