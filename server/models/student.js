// Student Schema

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  // Personal Details
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  dob: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
  },
  aadharCardNumber: {
    type: Number,
  },
  fatherContactNumber: {
    type: Number,
  },
  fatherName: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },

  // Credentials
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },

  // College Details
  enrollmentNumber: {
    type: String,
  },
  department: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  joiningYear: {
    type: Number,
    required: true,
  },
  otp: {
    type: String,
  },
});

studentSchema.pre('save', async function (next) {
  const student = this;
  if (student.isModified('password')) {
    student.password = await bcrypt.hash(student.password, 12);
  }
  next();
});

studentSchema.methods.toJSON = function () {
  const studentObject = this.toObject();
  delete studentObject.password;
  return studentObject;
};

studentSchema.set('timestamps', true);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
