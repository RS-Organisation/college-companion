const Attendance = require('../models/attendance');
const Subject = require('../models/subject');
const mongoose = require('mongoose');

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

