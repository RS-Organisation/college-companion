const { query } = require('express');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Student = require('../models/student');
const {
  generateEnrollmentNumber,
  getJoiningYear,
} = require('../util/helperFunctions');

// GET ROUTES

const getStudentDetails = async (req, res) => {
  try {
    const { _id } = req.studentDetails;
    const student = await Student.findById(_id);
    res.status(200).json(student);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getStudents = async (req, res) => {
  try {
    let queryObj;
    if (req.query.semester && req.query.section) {
      const joiningYear = getJoiningYear(parseInt(req.query.semester));
      queryObj = { ...req.query, joiningYear: joiningYear };
      delete queryObj.semester;
    } else {
      const joiningYear = getJoiningYear(year * 2);
      queryObj = { ...req.query, joiningYear: joiningYear };
    }
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

// PATCH ROUTES

const updateStudent = async (req, res) => {
  try {
    var updates = req.file ? { avatar: req.file.filename } : req.body;
    const { _id } = req.studentDetails;

    if (updates.password) {
      const hashedPassword = await bcrypt.hash(updates.password, 12);
      updates.password = hashedPassword;
    }
    
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
  updateStudent,
  deleteStudent,
};
