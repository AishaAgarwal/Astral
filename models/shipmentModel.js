const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
    sourceStationId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SpaceStation',
        required: true
    },
    destinationStationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'SpaceStation',
        required : true
    },
    goodsId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Goods',
        required: true
    },
    quantity : {
        type: Number,
        required: true
    },
    shipmentDetails: {
        type: String,
        required: true
    },
    status : {
        type : String,
        default: 'Pending'
    },
    createdAt:{
        type : Date,
        default : Date.now
    }
});

const Shipment = mongoose.model('Shipment', shipmentSchema);
module.exports = Shipment;