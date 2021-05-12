const Subject = require('../models/subject');
const mongoose = require('mongoose');

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
    res.status(200).json(subjects);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// const getSubjectsForStudent = async (req, res) => {
//   try {
// 		const {department, joiningYear} = req.studentDetails;
// 		const semester =
//     const subjects = await Subject.find(req.query);
//     res.status(200).json(subjects);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

// POST ROUTES

const addSubject = async (req, res) => {
  const details = req.body;
  try {
    const newSubject = new Subject({ ...details });
    await newSubject.save();
    res.status(201).json({ message: 'New subject added successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllSubjects,
  addSubject,
};
