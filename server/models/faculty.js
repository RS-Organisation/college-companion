// Faculty Schema

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const facultySchema = new Schema({
	// Personal Details
	name: {
		type: String,
		required: true
	},
	gender: {
		type: String
	},
	dob: {
		type: String,
		required: true
	},
	avatar: {
		type: String
	},
	facultyMobileNumber: {
		type: Number
	},
	aadharCardNumber: {
		type: Number
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
	designation: {
		type: String,
		required: true
	},
	joiningYear: {
		type: Number,
		required: true
	},
	subjectsCanTeach: [{
		type: String
	}],
	otp: {
		type: String
	}
});

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;
