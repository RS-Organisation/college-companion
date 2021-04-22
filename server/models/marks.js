// Marks Schema

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const marksSchema = new Schema({
  // Student Details
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
  },
  // Subject Details
  subject: {
    type: Schema.Types.ObjectId,
    ref: 'Subject',
  },

  // Exam Details
  examType: {
    type: String,
    required: true,
  },
  marks: {
    type: Number,
    default: 0,
  },
  totalMarks: {
    type: Number,
  },
  semester: {
    type: Number,
    required: true,
  },
  section: {
    type: String,
  },
  department: {
    type: String,
  },
});

marksSchema.set('timestamps', true);

const Marks = mongoose.model('Marks', marksSchema);

module.exports = Marks;
