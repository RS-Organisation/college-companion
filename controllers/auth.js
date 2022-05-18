const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const Admin = require('../models/admin');
const Student = require('../models/student');
const Faculty = require('../models/faculty');
const { Console } = require('console');

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
    // console.log(existingAdmin);
    if (!existingAdmin) {
      return res
        .status(404)
        .json({ success: false, message: "Admin doesn't exist." });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingAdmin.password
    );

    if (!isPasswordCorrect) {
      return res
        .status(404)
        .json({ success: false, message: 'Invalid Credentials' });
    }

    const admin = JSON.parse(JSON.stringify(existingAdmin));
    delete admin.password;
    const token = createToken(admin);
    res.status(200).json({ result: existingAdmin, success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Something went wrong.' });
  }
};

const facultyLogin = async (req, res) => {
  const { registrationNumber, password } = req.body;
  try {
    const existingFaculty = await Faculty.findOne({ registrationNumber });
    if (!existingFaculty) {
      return res
        .status(404)
        .json({ success: false, message: "Faculty doesn't exist." });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingFaculty.password
    );
    if (!isPasswordCorrect) {
      return res
        .status(404)
        .json({ success: false, message: 'Invalid Credentials' });
    }

    const faculty = JSON.parse(JSON.stringify(existingFaculty));
    delete faculty.password;
    const token = createToken(faculty);

    res.status(200).json({ result: existingFaculty, success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Something went wrong.' });
  }
};

const studentLogin = async (req, res) => {
  const { enrollmentNumber, password } = req.body;
  try {
    const existingStudent = await Student.findOne({ enrollmentNumber });
    if (!existingStudent) {
      return res
        .status(404)
        .json({ success: false, message: "Student doesn't exist." });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingStudent.password
    );
    if (!isPasswordCorrect) {
      return res
        .status(404)
        .json({ success: false, message: 'Invalid Credentials' });
    }

    const student = JSON.parse(JSON.stringify(existingStudent));
    delete student.password;
    const token = createToken(student);

    res.status(200).json({ success: true, result: existingStudent, token });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Something went wrong.' });
  }
};

const forgotPassword = async (req, res) => {
  const { email, userType } = req.body;
  try {
    var user;
    if (userType === 'admin') {
      user = await Admin.findOne({ email });
    } else if (userType === 'faculty') {
      user = await Faculty.findOne({ email });
    } else if (userType === 'student') {
      user = await Student.findOne({ email });
    }

    if (!user) {
      res.status(403).json({ success: false, message: 'User does not exist.' });
    } else {
      const token = crypto.randomBytes(20).toString('hex');
      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 10 * 60 * 1000;
      await user.save();

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: `${process.env.EMAIL_ADDRESS}`,
          pass: `${process.env.EMAIL_PASSWORD}`,
        },
      });

      const mailOptions = {
        from: `${process.env.EMAIL_ADDRESS}`,
        to: `${email}`,
        subject: 'Link To Reset Password',
        text:
          'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process within 10 minutes of receiving it:\n\n' +
          `${process.env.CLIENT_URL}/reset/${userType}/${token}\n\n` +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n',
      };

      transporter.sendMail(mailOptions, (err, response) => {
        if (err) {
          res
            .status(500)
            .json({ success: false, message: 'Something went wrong.' });
        } else {
          res
            .status(200)
            .json({ success: true, message: 'Recovery email sent.' });
        }
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Something went wrong.' });
  }
};

const resetPassword = async (req, res) => {
  const { userType, token } = req.query;
  try {
    var user;
    if (userType === 'admin') {
      user = await Admin.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() },
      });
    } else if (userType === 'faculty') {
      user = await Faculty.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() },
      });
    } else if (userType === 'student') {
      user = await Student.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() },
      });
    }

    if (!user) {
      res.status(403).json({
        success: false,
        message: 'Password reset link is invalid or has expired',
      });
    } else {
      res.status(200).json({ success: true, id: user._id });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Something went wrong.' });
  }
};

const updatePasswordViaEmail = async (req, res) => {
  const { id, password, userType } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  try {
    var user;
    if (userType === 'admin') {
      user = await Admin.findByIdAndUpdate(
        { _id: id },
        {
          password: hashedPassword,
          resetPasswordToken: '',
          resetPasswordExpires: null,
        },
        { new: true }
      );
    } else if (userType === 'faculty') {
      user = await Faculty.findByIdAndUpdate(
        { _id: id },
        {
          password: hashedPassword,
          resetPasswordToken: '',
          resetPasswordExpires: null,
        },
        { new: true }
      );
    } else if (userType === 'student') {
      user = await Student.findByIdAndUpdate(
        { _id: id },
        {
          password: hashedPassword,
          resetPasswordToken: '',
          resetPasswordExpires: null,
        },
        { new: true }
      );
    }
    res
      .status(200)
      .json({ success: true, message: 'Password reset successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Something went wrong.' });
  }
};

module.exports = {
  adminLogin,
  facultyLogin,
  studentLogin,
  forgotPassword,
  resetPassword,
  updatePasswordViaEmail,
};
