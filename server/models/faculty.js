// Faculty Schema

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const facultySchema = new Schema({
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
  avatar: {
    type: String,
  },
  contactNumber: {
    type: Number,
  },
  aadharCardNumber: {
    type: Number,
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
  registrationNumber: {
    type: String,
  },
  department: {
    type: String,
    required: true,
  },
  designation: {
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

facultySchema.pre('save', async function (next) {
  const faculty = this;
  if (faculty.isModified('password')) {
    faculty.password = await bcrypt.hash(faculty.password, 12);
  }
  next();
});

facultySchema.methods.toJSON = function () {
  const facultyObject = this.toObject();
  delete facultyObject.password;
  return facultyObject;
};

facultySchema.set('timestamps', true);

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;
