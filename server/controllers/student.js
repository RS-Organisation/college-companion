const Student = require('../models/student');
const mongoose = require('mongoose');
const { generateEnrollmentNumber } = require('../util/helperFunctions');

// GET ROUTES

const getStudentDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const details = await Student.findById(id);
    res.status(200).json(details);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getStudents = async (req, res) => {
  try {
    const queryObj = req.body.queryObj;
    const details = await Student.find(queryObj);
    res.status(200).json(details);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// POST ROUTES

const addStudent = async (req, res) => {
  const details = req.body;
  try {
    const count = await Student.countDocuments({
      department: details.department,
    });
    const prefix = details.department;
    const enrollmentNumber = generateEnrollmentNumber(
      prefix,
      details.joiningYear,
      count + 1
    );
    const newStudent = new Student({ ...details, enrollmentNumber });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE ROUTE
const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const updatedDetails = await Student.findByIdAndUpdate(
      id,
      { ...body, id },
      {
        new: true,
      }
    );
    res.status(204).json(updatedDetails);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getStudentDetails,
  getStudents,
  addStudent,
  updateProfile,
};
