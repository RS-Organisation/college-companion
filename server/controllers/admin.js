const Admin = require('../models/admin');
const mongoose = require('mongoose');

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
    const newAdmin = new Admin({
      ...details,
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
