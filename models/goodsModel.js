const mongoose = require('mongoose');

const goodsSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true 
    },
    description : {
        type : 'String',
        reuqired : true
    },
    category : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    }
});

module.exports = mongoose.model('Goods', goodsSchema);