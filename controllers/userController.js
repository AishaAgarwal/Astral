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

// update the user profile 
const updateUserProfile = async (req, res) => {
    const {userId} = req.params;
    const {username, email} = req.body;

    if (!username || !email){
        return res.status(400).json({msg : 'Invalid data'});
    }

    try{
        let user = await User.findById(userId);

        if(!user){
            return res.status(404).json({msg: 'User not found'});
        }

        // update the user's data 
        user.username = username;
        user.email = email;

        await user.save();

        res.json({
            userId : user._id,
            username : user.username,
            email : user.email
        });
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('server error');
    }
};

// change user password 
const changeUserPassword = async(req,res) => {
    const {userId} = req.params;
    const {oldPassword, newPassword} = req.body;

    if (!oldPassword || !newPassword){
        return res.status(400).json({message: 'invalid data request'});
    }

    try{
        const user = await User.findById(userId);
        if(!user){
               return res.status(404).json({message: 'user not found'});
        }

        if (oldPassword !== user.password){
            return res.status(400).json({message: 'invalid passowrd'});
        }

        user.password = newPassword;
        await user.save();

        res.status(200).json({message: 'password updated successfully'});
    }
    catch(error){
        console.log('error updatinh passowrd : ', error);
        registerUser.status(500).send('server error');
    }
};

// delete a user account 
const deleteUserAccount = async (req,res) => {
    const {userId} = req.param;

    try{
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({message: 'user not found'});
        }

        await User.findByIdAndDelete(userId);

        res.status(200).json({message: 'user deleted successfully'});
    }

    catch(err){
        console.error(err.message);
        res.status(500).send('server error');
    }
};

// retrieve user notifications
const getUserNotifications = async(req,res) => {
    const {userId} = req.params;

    try{
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({message: 'user not found'});
        }

        const notifications = user.notifications || [];
        res.status(200).json({notifications});
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('server error');
    }
};

module.exports ={registerUser, getUserProfile, updateUserProfile, changeUserPassword, deleteUserAccount, getUserNotifications};