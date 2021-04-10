// Student Schema

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
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
	studentMobileNumber: {
		type: Number
	},
	aadharCardNumber: {
		type: Number
	},
	fatherMobileNumber: {
		type: Number
	},
	fatherName: {
		type: String,
		required: true
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
	enrollmentNumber: {
		type: String
	},
	department: {
		type: String,
		required: true
	},
	section: {
		type: String,
		required: true
	},
	semester: {
		type: Number,
		required: true
	},
	joiningYear: {
		type: Number,
		required: true
	},
	batch: {
		type: String
	},
	subjects: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Subject'
		}
	],
	otp: {
		type: String
	}
});

studentSchema.set('timestamps', true);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;