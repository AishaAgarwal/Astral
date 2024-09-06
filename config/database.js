const mongoose = require('mongoose');

// connect to mongodb 
const connectDB = async() => {
    try{
        await mongoose.connect('mongodb://localhost/astrus');

        console.log('connected');
    }
    catch(error){
        console.error(error.message);
    }
};

module.exports = connectDB;