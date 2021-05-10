const Student = require('../models/student');
const mongoose = require('mongoose');
const { generateEnrollmentNumber } = require('../util/helperFunctions');

// GET ROUTES

const getStudentDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const details = await Student.findById(id);
    delete details.password;
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
      joiningYear: details.joiningYear,
    });

    const prefix = details.department;
    var enrollmentNumber = generateEnrollmentNumber(
      prefix,
      details.joiningYear,
      count + 1
    );

    const checkExisting = await Student.findOne({ enrollmentNumber });

    if (checkExisting) {
      const last = await Student.findOne({ department: details.department })
        .sort({ createdAt: -1 })
        .limit(1);
      const newCount = parseInt(last.enrollmentNumber.slice(-3));
      enrollmentNumber = generateEnrollmentNumber(
        prefix,
        details.joiningYear,
        newCount + 1
      );
    }

    const newStudent = new Student({
      ...details,
      password: details.dob,
      enrollmentNumber,
    });

    await newStudent.save();
    delete newStudent.password;
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE ROUTE

const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedDetails = await Student.findByIdAndUpdate(
      id, updates, { new: true }
    );
    delete updatedDetails.password;
    res.status(201).json(updatedDetails);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE ROUTE
const deleteStudent = async (req, res) => {
  try {
    const { enrollmentNumber } = req.body;
    await Student.findOneAndRemove({ enrollmentNumber });
    res.json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getStudentDetails,
  getStudents,
  addStudent,
  updateProfile,
  deleteStudent,
};
