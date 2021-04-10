require('dotenv').config();
const express = require('express');
require('./db/mongoose.js');
const cors = require('cors');

// importing routes
const adminRoutes = require('./routes/admin');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); //use cors middleware
app.use(express.json()); //to parse json data that our server sending and receiving

app.use('/admin', adminRoutes);

app.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
});
