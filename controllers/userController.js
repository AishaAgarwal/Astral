const User = require('../models/userModel');

// register a new user 
const registerUser = async(req,res) => {
    const {username, email, password} = req.body;

    // validation 
    if (!username || !email || !password){
        return res.status(400).json({message:'Invalid request data'});
    }

    try{

        // check if user already exists
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(409).json({message: 'User already exists.'});
        }

        // create a new uer 
        const newUser = new User({username, email, password});
        await newUser.save();

        // respond with the user data 
        res.status(201).json({
            userId : newUser._id,
            username: newUser.username,
            email : newUser.email,
        });
    }
    catch(error){
       console.error('Error registering user: ', error);
    }
};

module.exports ={registerUser};