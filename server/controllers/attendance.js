const Attendance = require('../models/attendance');
const Subject = require('../models/subject');
const mongoose = require('mongoose');

// GET ROUTES

const getAttendanceById = async (req,res) => {
    try {
        const { id } = req.params;
        const { section, department, semester } = req.body;

        const attendanceList = await Attendance.find({ 
            student: id,
            section,
            department,
            semester
        });

        res.status(200).json(attendanceList);
    }
    catch(err) {
        res.status(404).json({ message: err.message });
    }
};

const getAttendanceOfAll = async (req,res) => {
    try {
        const { section, department, subjectCode } = req.body;
        const sub = await Subject.findOne({ subjectCode });

        const attendanceList = await Attendance.find({ 
            subject: sub._id,
            section,
            department
        });

        res.status(200).json(attendanceList);
    }
    catch(err) {
        res.status(404).json({ message: err.message });
    }
};

// PATCH ROUTES

const markAttendance = async (req,res) => {
    try {
        const {
            studentsList, 
            subjectCode 
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
    catch(err) {
        const errorMessage = `Error in marking attendence : ${err.message}`;
        return res.status(400).json({ message: errorMessage });
    } 
};

module.exports = { markAttendance };

