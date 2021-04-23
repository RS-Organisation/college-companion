// Attendance Schema

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
	// Student Details
	student: {
		type: Schema.Types.ObjectId,
		ref: 'Student'
	},
	// Subject Details
	subject: {
		type: Schema.Types.ObjectId,
		ref: 'Subject'
	},

	totalLecturesHeld: {
		type: Number,
		default: 0
	},
	lecturesAttended: {
		type: Number,
		default: 0
	},
	section: {
		type: String,
	},
	department: {
		type: String,
	}
});

attendanceSchema.set('timestamps', true);

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;