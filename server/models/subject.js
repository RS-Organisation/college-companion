// Subject Schema

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
	attendance: {
		type: Schema.Types.ObjectId,
		ref: 'Attendance'
	},
	subjectName: {
		type: String,
		required: true,
		trim: true
	},
	subjectCode: {
		type: String,
		required: true
	},
	department: {
		type: String,
		required: true
	},
	totalLectures: {
		type: Number,
		default: 30
	},
	semester: {
		type: Number,
		required: true
	}
});

subjectSchema.set('timestamps', true);

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;