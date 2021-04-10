const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const adminRoutes = require('./routes/admin');
// const userRoutes = require('./routes/users');

app.use(cors()); //use cors middleware
app.use(express.json()); //to parse json data that our server sending and receiving

app.use('/admin', adminRoutes);
// app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.send('API RUNNING');
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection establised successfully');
});

mongoose.set('useFindAndModify', false);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
