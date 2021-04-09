// Admin Schema

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
	// Personal Details
	name: {
		type: String,
		required: true
	},
	dob: {
		type: String,
		required: true
	},
	contactNumber: {
		type: Number
	},
	avatar: {
		type: String
	},

	// Credentials
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String
	},

	// College Details
	registrationNumber: {
		type: String
	},
	department: {
		type: String
	},
	joiningYear: {
		type: Number
	}
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
