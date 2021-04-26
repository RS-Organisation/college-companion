const Admin = require('../models/admin');
const Student = require('../models/student');
const Faculty = require('../models/faculty');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Create New JWT Token

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

const adminLogin = async (req, res) => {
  const { registrationNumber, password } = req.body;
  try {
    const existingAdmin = await Admin.findOne({ registrationNumber });

    if (!existingAdmin) {
      return res.status(404).json({ message: "Admin doesn't exist." });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingAdmin.password
    );

    if (!isPasswordCorrect) {
      return res.status(404).json({ message: 'Invalid Credentials' });
    }

    const token = createToken(existingAdmin._id);
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ result: existingAdmin });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

const facultyLogin = async (req, res) => {
  const { registrationNumber, password } = req.body;
  try {
    const existingFaculty = await Faculty.findOne({ registrationNumber });

    if (!existingFaculty) {
      return res.status(404).json({ message: "Faculty doesn't exist." });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingFaculty.password
    );

    if (!isPasswordCorrect) {
      return res.status(404).json({ message: 'Invalid Credentials' });
    }

    const token = createToken(existingFaculty._id);
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ result: existingFaculty });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

const studentLogin = async (req, res) => {
  const { enrollmentNumber, password } = req.body;
  try {
    const existingStudent = await Student.findOne({ enrollmentNumber });

    if (!existingStudent) {
      return res.status(404).json({ message: "Student doesn't exist." });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingStudent.password
    );

    if (!isPasswordCorrect) {
      return res.status(404).json({ message: 'Invalid Credentials' });
    }

    const token = createToken(existingStudent._id);
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ result: existingStudent });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

const logOut = async (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
};

module.exports = { 
  adminLogin, 
  facultyLogin, 
  studentLogin, 
  logOut 
};
