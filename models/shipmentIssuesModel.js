const mongoose = require('mongoose');

const shipmentIssuesSchema = new mongoose.Schema({
    shipmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Shipment',
        required : true
    }, 
    issueDescription : {
        type : String,
        required : true
    },
    reportedBy : {
        type: String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});

const shipmentIssue = mongoose.model('ShipmentIssue', shipmentIssuesSchema);

module.exports = shipmentIssue;