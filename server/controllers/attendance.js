const mongoose = require('mongoose');
const Attendance = require('../models/attendance');
const Subject = require('../models/subject');
const { getSemester } = require('../util/helperFunctions');

// GET ROUTES

const getAttendanceById = async (req, res) => {
  try {
    const { _id, joiningYear } = req.studentDetails;
    const semester = getSemester(joiningYear);
    const attendance = await Attendance.find({
      student: _id,
      semester,
    });
    res.status(200).json({
      result: attendance,
      success: true,
      message: 'Attendance fetched successfully',
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Attendance can't fetched. Please try again",
    });
  }
};

const getAttendanceOfAll = async (req, res) => {
  try {
    const { subjectCode } = req.body;
    const sub = await Subject.findOne({ subjectCode });
    const attendanceList = await Attendance.find({ subject: sub._id });
    res.status(200).json({
      result: attendanceList,
      success: true,
      message: 'Attendance fetched successfully',
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Error in fetching attendance. Please try again',
    });
  }
};

// POST ROUTES

const markAttendance = async (req, res) => {
  try {
    const { allStudents, selectedStudents, subjectCode, semester } = req.body;

    const sub = await Subject.findOne({ subjectCode });

    allStudents.forEach(async (stud) => {
      if (selectedStudents.includes(stud._id)) {
        const alreadyExist = await Attendance.findOne({
          student: stud._id,
          subject: sub._id,
        });
        if (!alreadyExist) {
          const attendance = new Attendance({
            student: stud._id,
            subject: sub._id,
            semester,
          });
          attendance.totalLecturesHeld += 1;
          attendance.lecturesAttended += 1;
          await attendance.save();
        } else {
          alreadyExist.totalLecturesHeld += 1;
          alreadyExist.lecturesAttended += 1;
          await alreadyExist.save();
        }
      } else {
        const alreadyExist = await Attendance.findOne({
          student: stud._id,
          subject: sub._id,
        });
        if (!alreadyExist) {
          const attendance = new Attendance({
            student: stud._id,
            subject: sub._id,
            semester,
          });
          attendance.totalLecturesHeld += 1;
          await attendance.save();
        } else {
          alreadyExist.totalLecturesHeld += 1;
          await alreadyExist.save();
        }
      }
    });

    res
      .status(201)
      .json({ success: true, message: 'Attendance marked successfully' });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: 'Error in marking attendence. Please try again',
    });
  }
};

module.exports = {
  getAttendanceById,
  getAttendanceOfAll,
  markAttendance,
};
