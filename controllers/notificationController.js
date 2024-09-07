const User = require('../models/userModel');
const Notification = require('../models/notificationModel');
const wss = require('../websocketServer');

const notifyUsers = async(req,res) => {
    const {userId, notificationType, message} = req.body;

    if(!userId || !notificationType || !message){
        return res.status(400).json({
            message : 'invalid request data'
        });
    }

    try{
        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({
                message: 'User not found'
            });
        }

        // const notification = new Notification({
        //     userId,
        //     notificationType,
        //     message
        // });

        // await notification.save();

        // res.status(201).json({
        //     message : 'notification sent successfully'
        // });

        wss.clients.forEach(client => {
            if(client.readyState === WebSocket.OPEN){
                client.send(JSON.stringify({
                    type: 'notification',
                    userId,
                    notificationType,
                    message
                }));
            }
        })

        res.status(201).json({message: 'notification sent successfully'});
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            message : 'server error'
        });
    }
};

module.exports = {notifyUsers};