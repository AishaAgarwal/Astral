const Goods = require('../models/goodsModel');

const createItem = async (req,res) => {
    const {name, description, category, price} = req.body;

    if(!name || !description || !category || !price){
        return res.status(400).json({
            message : 'invalid data request'
        });
    }

    try{
        const newItem = new Goods({
            name,
            description,
            category,
            price
        });

        await newItem.save();

        res.status(201).json({
            message : 'Item created successfully',
            item : newItem
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            message : 'server error'
        });
    }
};

module.exports = {createItem};