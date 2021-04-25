// Admin Schema

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  // Personal Details
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
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
  registrationNumber: {
    type: String,
  },
  department: {
    type: String,
  },
  joiningYear: {
    type: Number,
    required: true,
  },
});

adminSchema.pre('save', async function (next) {
  const admin = this;
  if (admin.isModified('password')) {
    admin.password = await bcrypt.hash(admin.password, 12);
  }
  next();
});

adminSchema.set('timestamps', true);

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
