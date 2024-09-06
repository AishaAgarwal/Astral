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

// to get the user profile
const getUserProfile = async(req,res) => {
    const {userId} = req.params;

    try{
        const user = await User.findById(userId);

        if (!user){
            return res.status(404).json({msg : 'user not found'});
        }

        const userProfile = {
            userId : user._id,
            username : user.username,
            email : user.email,
            Notifications : user.notifications || []
        };

        res.json(userProfile);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('server error');
    }
};

module.exports ={registerUser, getUserProfile};