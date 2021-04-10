const Admin = require('../models/admin');
const Faculty = require('../models/faculty');
const Student = require('../models/student');
const mongoose = require('mongoose');

// GET ROUTES

const getAllAdmins = async (req, res) => {
  try {
    const details = await Admin.find({});
    res.status(200).json(details);
    // console.log(postMessages);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getAdminDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const details = await Admin.findById(id);
    res.status(200).json(details);
    // console.log(postMessages);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getAllFaculty = async (req, res) => {
  try {
    const details = await Faculty.find({});
    console.log(details);
    res.status(200).json(details);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const details = await Student.find({});
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

const addFaculty = async (req, res) => {
  const details = req.body;
  try {
    const newFaculty = new Faculty({
      ...details,
      createdAt: new Date().toISOString(),
    });
    await newFaculty.save();
    res.status(201).json(newFaculty);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

const addStudent = async (req, res) => {
  const details = req.body;
  try {
    const newStudent = new Student({
      ...details,
      createdAt: new Date().toISOString(),
    });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

module.exports = {
  getAllAdmins,
  getAdminDetails,
  getAllFaculty,
  getAllStudents,
  addAdmin,
  addFaculty,
  addStudent,
};
