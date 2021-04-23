const Marks = require('../models/marks');
const Subject = require('../models/subject');
const mongoose = require('mongoose');

const getMarksOfAll = async (req, res) => {
  try {
    const { section, department, subjectCode } = req.body;
    const sub = await Subject.findOne({ subjectCode });

    const marksList = await Marks.find({
      subject: sub._id,
      section,
      department,
    });
    res.status(200).json(marksList);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getMarksById = async (req, res) => {
  try {
    const { id } = req.params;
    const { section, department, semester } = req.body;

    const marksList = await Marks.find({
      student: id,
      section,
      department,
      semester,
    });
    res.status(200).json(marksList);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const uploadMarks = async (req, res) => {
  try {
    const {
      section,
      department,
      subjectCode,
      examType,
      totalMarks,
      studentsList,
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
    studentsList.forEach(async (stud) => {
      const newMarks = await new Marks({
        student: stud.studentId,
        subject: sub._id,
        examType,
        totalMarks,
        section,
        department,
        marks: stud.marks,
      });
      await newMarks.save();
    });
    return res.status(201).json({ message: 'Marks uploaded successfully.' });
  } catch (err) {
    const errorMessage = `Error in uploading marks : ${err.message}`;
    return res.status(400).json({ message: errorMessage });
  }
};

module.exports = { getMarksOfAll, getMarksById, uploadMarks };
