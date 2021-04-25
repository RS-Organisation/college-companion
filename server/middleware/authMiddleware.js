// Middleware for authentication

const Admin = require('../models/admin');
const Faculty = require('../models/faculty');
const Student = require('../models/student');

const jwt = require('jsonwebtoken');

const adminAuth = async (req, res, next) => {
  try {
    const token = req.cookie.jwt;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findOne({ _id: decoded.id });
    if (!admin) {
      return res.status(400).json({ message: 'Admin does not exist' });
    }
    req.adminDetails = admin;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Please authenticate!' });
  }
};

const facultyAuth = async (req, res, next) => {
  try {
    const token = req.cookie.jwt;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const faculty = await Faculty.findOne({ _id: decoded.id });
    if (!faculty) {
      return res.status(400).json({ message: 'Faculty does not exist' });
    }
    req.facultyDetails = faculty;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Please authenticate!' });
  }
};

const studentAuth = async (req, res, next) => {
  try {
    const token = req.cookie.jwt;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const student = await Student.findOne({ _id: decoded.id });
    if (!student) {
      return res.status(400).json({ message: 'Student does not exist' });
    }
    req.studentDetails = student;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Please authenticate!' });
  }
};

module.exports = { adminAuth, facultyAuth, studentAuth };
