const Marks = require('../models/marks');
const Subject = require('../models/subject');
const mongoose = require('mongoose');

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

    const sub = await Subject.find({ subjectCode });

    const isUploaded = await Marks.findOne({
      examType,
      section,
      department,
      subject: sub._id,
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
        marks: stud.marks
      });
      await newMarks.save();
    });    
    res.status(201).json({ message: 'Marks uploaded successfully.' });
  } 
  catch (err) {
    const errorMessage = `Error in uploading marks : ${err.message}`;
    return res.status(400).json({ message: errorMessage });
  }
};

module.exports = { uploadMarks };
