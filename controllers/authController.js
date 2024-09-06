const User = require('../models/userModel');
const jwt = require('jsonwebtoken');



// Secret key for JWT (consider storing this in an environment variable)
const JWT_SECRET = 'leafekgwkghigjwlijg';

// login route
const Auth = async(req,res) => {
    const {email, password} = req.body;

    try{
        // check if user exists
        const user = await User.findOne({email});
        if (!user){
            return res.status(400).json({msg: 'user not found'});
        }

        // Compare the password (plain text comparison)
        if (password !== user.password) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        console.log(password)
        console.log(user.password)
       

        // create a JWT token
        const payload = {
            user:{
                id : user.id
            }
        };

        jwt.sign(payload, JWT_SECRET, {}, (err, token) => {
            if (err) throw err;
            res.json({token});
        });
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('server error');
    }
};

module.exports = {Auth};