const mongoose = require('mongoose');
const Marks = require('../models/marks');
const Subject = require('../models/subject');

// GET ROUTES

const getMarksOfAll = async (req, res) => {
  try {
    const { subjectCode } = req.body;
    const sub = await Subject.findOne({ subjectCode });

    const marksList = await Marks.find({ subject: sub._id });
    res.status(200).json(marksList);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getMarksById = async (req, res) => {
  try {
    const { _id } = req.studentDetails;
    const { semester, examType } = req.query;

    const marksList = await Marks.find({
      student: _id,
      semester,
      examType,
    });
    res.status(200).json(marksList);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// POST ROUTES

const uploadMarks = async (req, res) => {
  try {
    const {
      marksList,
      section,
      department,
      semester,
      subjectCode,
      examType,
    } = req.body;

    const sub = await Subject.findOne({ subjectCode });

    const isUploaded = await Marks.findOne({
      subject: sub._id,
      examType,
      section,
      department,
    });

    if (isUploaded) {
      const errorMessage = 'You have already uploaded marks of this exam';
      return res.status(400).json({ message: errorMessage });
    }
    marksList.forEach(async (stud) => {
      const newMarks = await new Marks({
        student: stud.id,
        subject: sub._id,
        examType,
        totalMarks: (examType === 'internal') ? 25 : 75,
        section,
        department,
        semester,
        marks: stud.marks,
      });
      await newMarks.save();
    });
    return res.status(201).json({ message: 'Marks uploaded successfully' });
  } catch (err) {
    const errorMessage = `Error in uploading marks : ${err.message}`;
    return res.status(400).json({ message: errorMessage });
  }
};

module.exports = { getMarksOfAll, getMarksById, uploadMarks };
