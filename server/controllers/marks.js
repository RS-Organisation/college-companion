const Marks = require('../models/marks');
const Subject = require('../models/subject');
const mongoose = require('mongoose');

const uploadMarks = async (req, res) => {
  const {
    section, // we get from 1st filter form
    department, // we get from 1st  filter form
    subjectCode, // we get from 2nd filter form
    examType, // we get from 2nd filter form
    totalMarks, // we get from 2nd filter form
    marks, // array of object we get from 2nd filter form
    semester, // we get from 2nd filter form
  } = req.body;
  try {
    const subject = await Subject.find({ subjectCode });
    const isUploaded = await Marks.find({
      examType,
      section,
      semester,
      department,
      subject: subject._id,
    });
    if (isUploaded.length !== 0) {
      const errorMessage = 'You have already uploaded marks of the given exam';
      return res.status(400).json({ message: errorMessage });
    }
    for (var i = 0; i < marks.length; i++) {
      const newMarks = await new Marks({
        student: marks[i].studentId,
        subject: subject._id,
        examType,
        totalMarks,
        section,
        department,
        semester,
        marks: marks[i].marks,
      });
      await newMarks.save();
    }
    res.status(201).json({ message: 'Marks uploaded successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { uploadMarks };
