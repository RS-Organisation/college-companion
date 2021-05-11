const Student = require('../models/student');
const mongoose = require('mongoose');
const {
  generateEnrollmentNumber,
  getJoiningYear,
} = require('../util/helperFunctions');

const bcrypt = require('bcryptjs');

// GET ROUTES

// const getStudentDetails = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const student = await Student.findById(id);
//     res.status(200).json(student);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

const getStudents = async (req, res) => {
  try {
    const { department, year } = req.query;
    const joiningYear = getJoiningYear(year * 2);
    const queryObj = { department, joiningYear };
    const students = await Student.find(queryObj);
    res.status(200).json(students);
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

    const dep = details.department;
    var enrollmentNumber = generateEnrollmentNumber(
      dep,
      details.joiningYear,
      count + 1
    );

    const newStudent = new Student({
      ...details,
      password: details.dob,
      enrollmentNumber,
    });

    await newStudent.save();
    res.status(201).json({ message: 'New student added successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE ROUTE

const updateProfile = async (req, res) => {
  try {
    const updates = req.body;
    const { _id } = req.studentDetails;
    const updatedDetails = await Student.findByIdAndUpdate(_id, updates, {
      new: true,
    });
    res.status(200).json({
      result: updatedDetails,
      message: 'Student details updated successfully',
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updatePassword = async (req, res) => {
  try {
    const updates = req.body;
    const { _id } = req.studentDetails;
    const hashedPassword = await bcrypt.hash(updates.password, 12);
    const updatedDetails = await Student.findByIdAndUpdate(
      _id,
      { password: hashedPassword },
      { new: true }
    );
    res.status(200).json({
      result: updatedDetails,
      message: 'Student details updated successfully',
    });
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
  // getStudentDetails,
  getStudents,
  addStudent,
  updateProfile,
  updatePassword,
  deleteStudent,
};
