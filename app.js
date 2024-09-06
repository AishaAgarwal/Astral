const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/database');

// import routes 
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.port || 3000;

//middleware 
app.use(cors());



app.use(bodyParser.json());

//use routes 
app.use('/users', userRoutes);

//start the server 
app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server running on port ${PORT}`);
})