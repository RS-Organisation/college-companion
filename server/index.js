require('dotenv').config();
const express = require('express');
require('./db/mongoose.js');
const cors = require('cors');

const adminRoutes = require('./routes/admin');
const facultyRoutes = require('./routes/faculty');
const studentRoutes = require('./routes/student');
const subjectRoutes = require('./routes/subject');
const marksRoutes = require('./routes/marks');

const app = express();
const port = process.env.PORT || 5000;

// MIDDLEWARES
app.use(cors()); //use cors middleware
app.use(express.json()); //to parse json data that our server sending and receiving

app.use('/admin', adminRoutes);
app.use('/faculty', facultyRoutes);
app.use('/student', studentRoutes);
app.use('/subject', subjectRoutes);
app.use('/marks', marksRoutes);

app.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
});
