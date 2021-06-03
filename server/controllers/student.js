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
    res.status(200).json({ result: student, success: true });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Error in fetching details. Please try again',
    });
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
      const { year } = req.query;
      const joiningYear = getJoiningYear(year * 2);
      queryObj = { ...req.query, joiningYear: joiningYear };
      delete queryObj.year;
    }
    const students = await Student.find(queryObj);
    res.status(200).json({
      result: students,
      success: true,
      message: 'Students fetched successfully',
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Error in fetching students. Please try again',
    });
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
    res
      .status(201)
      .json({ success: true, message: 'New student added successfully' });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Error in adding student. Please try again',
    });
  }
};

// PATCH ROUTES

const updateStudent = async (req, res) => {
  try {
    var updates = req.file ? { avatar: req.file.filename } : req.body;
    const { _id } = req.studentDetails;
    var displayMessage = 'Faculty details updated successfully';

    if (updates.password) {
      const hashedPassword = await bcrypt.hash(updates.password, 12);
      updates.password = hashedPassword;
      displayMessage = 'Password changed successfully';
    }

    const updatedDetails = await Student.findByIdAndUpdate(_id, updates, {
      new: true,
    });
    res.status(200).json({
      result: updatedDetails,
      success: true,
      message: displayMessage,
    });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: 'Updation failed! Please try again' });
  }
};

// DELETE ROUTE
const deleteStudent = async (req, res) => {
  try {
    const { enrollmentNumber } = req.body;
    await Student.findOneAndRemove({ enrollmentNumber });
    res.json({ success: true, message: 'Student deleted successfully' });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: 'Request failed! Please try again' });
  }
};

module.exports = {
  getStudentDetails,
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
};
