const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    stationId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'SpaceStation',
        required : true
    },
    goodsId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Goods',
        required: true
    },
    stockLevel : {
        type : Number,
        required : true
    }
});

module.exports = mongoose.model('Inventory', inventorySchema);