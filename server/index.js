require('dotenv').config();
const express = require('express');
require('./db/mongoose.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const adminRoutes = require('./routes/admin');
const facultyRoutes = require('./routes/faculty');
const studentRoutes = require('./routes/student');
const subjectRoutes = require('./routes/subject');
const marksRoutes = require('./routes/marks');
const attendanceRoutes = require('./routes/attendance');
const authRoutes = require('./routes/auth');

const app = express();
const port = process.env.PORT || 5000;

// MIDDLEWARES
app.use(cors()); //use cors middleware
app.use(cookieParser()); // to use and save cookie values
app.use(express.json()); //to parse json data that our server sending and receiving

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/faculty', facultyRoutes);
app.use('/student', studentRoutes);
app.use('/subject', subjectRoutes);
app.use('/marks', marksRoutes);
app.use('/attendance', attendanceRoutes);

app.get('/', (req, res) => {
  res.send('API RUNNING');
});

app.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
});
