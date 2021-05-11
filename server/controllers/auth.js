const Admin = require('../models/admin');
const Student = require('../models/student');
const Faculty = require('../models/faculty');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Create New JWT Token

const createToken = (userData) => {
  return jwt.sign({ ...userData }, process.env.JWT_SECRET, {
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

    const admin = JSON.parse(JSON.stringify(existingAdmin));
    delete admin.password;
    const token = createToken(admin);

    res.status(200).json({ result: existingAdmin, token });
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

    const faculty = JSON.parse(JSON.stringify(existingFaculty));
    delete faculty.password;
    const token = createToken(faculty);

    res.status(200).json({ result: existingFaculty, token });
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

    const student = JSON.parse(JSON.stringify(existingStudent));
    delete student.password;
    const token = createToken(student);

    res.status(200).json({ result: existingStudent, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

module.exports = {
  adminLogin,
  facultyLogin,
  studentLogin,
};
