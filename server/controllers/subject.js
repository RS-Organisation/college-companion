const mongoose = require('mongoose');
const Subject = require('../models/subject');
const { getSemester } = require('../util/helperFunctions');

// GET ROUTES

const getAllSubjects = async (req, res) => {
  try {
    var queryData = {};
    if (req.studentDetails) {
      const { department, joiningYear } = req.studentDetails;
      const semester = getSemester(joiningYear);
      queryData = {
        department,
        semester,
      };
    } else {
      queryData = {
        ...req.query,
      };
    }
    const subjects = await Subject.find(queryData);
    res.status(200).json({
      result: subjects,
      success: true,
      message: 'Subjects fetched successfully',
    });
  } catch (err) {
    res
      .status(404)
      .json({
        success: false,
        message: 'Error in fetching subjects. Please try again',
      });
  }
};

// POST ROUTES

const addSubject = async (req, res) => {
  const details = req.body;
  try {
    const newSubject = new Subject({ ...details });
    await newSubject.save();
    res
      .status(201)
      .json({ success: true, message: 'New subject added successfully' });
  } catch (err) {
    res
      .status(400)
      .json({
        success: false,
        message: 'Error in adding subject. Please try again',
      });
  }
};

module.exports = {
  getAllSubjects,
  addSubject,
};
