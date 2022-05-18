if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const path = require('path');
require('./db/mongoose.js');
const cors = require('cors');

const adminRoutes = require('./routes/admin');
const facultyRoutes = require('./routes/faculty');
const studentRoutes = require('./routes/student');
const subjectRoutes = require('./routes/subject');
const marksRoutes = require('./routes/marks');
const attendanceRoutes = require('./routes/attendance');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// MIDDLEWARES
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use('/uploads', express.static(path.join(__dirname, './uploads/')));

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/faculty', facultyRoutes);
app.use('/student', studentRoutes);
app.use('/subject', subjectRoutes);
app.use('/marks', marksRoutes);
app.use('/attendance', attendanceRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, './client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API RUNNING');
  });
}

app.listen(PORT, () => {
  console.log(`Server is up on PORT: ${PORT}`);
});
