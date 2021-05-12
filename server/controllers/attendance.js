const Attendance = require('../models/attendance');
const Subject = require('../models/subject');
const mongoose = require('mongoose');

const { getSemester } = require('../util/helperFunctions');

// GET ROUTES

const getAttendanceById = async (req, res) => {
    try {
        const { _id, joiningYear } = req.studentDetails;
        const semester = getSemester(joiningYear);
        const attendance = await Attendance.find({
            student: _id,
            semester
        });
        res.status(200).json(attendance);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
};

const getAttendanceOfAll = async (req, res) => {
    try {
        const { subjectCode } = req.body;
        const sub = await Subject.findOne({ subjectCode });
        const attendanceList = await Attendance.find({ subject: sub._id });
        res.status(200).json(attendanceList);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// POST ROUTES

const markAttendance = async (req, res) => {
    try {
        const {
            studentsList,
            subjectCode,
            semester
        } = req.body;

        const sub = await Subject.findOne({ subjectCode });

        studentsList.forEach(async (stud) => {
            const alreadyExist = await Attendance.findOne({
                student: stud.studentId,
                subject: sub._id
            });

            if (!alreadyExist) {
                const attendance = new Attendance({
                    student: stud.studentId,
                    subject: sub._id,
                    semester
                });
                attendance.totalLecturesHeld += 1;
                attendance.lecturesAttended += stud.isPresent;
                await attendance.save();
            }
            else {
                alreadyExist.totalLecturesHeld += 1;
                alreadyExist.lecturesAttended += stud.isPresent;
                await alreadyExist.save();
            }
        });
        res.status(201).json({ message: 'Attendance marked successfully.' });
    }
    catch (err) {
        const errorMessage = `Error in marking attendence : ${err.message}`;
        return res.status(400).json({ message: errorMessage });
    }
};

module.exports = {
    getAttendanceById,
    getAttendanceOfAll,
    markAttendance
};

