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

// retrieve goods details 
const getItemDetails = async (req,res) => {
    const {goodsId} = req.params;

    try{
        const goods = await Goods.findById(goodsId);

        if(!goods){
            return res.status(404).json({
                message : 'item not found'
            });
        }

        res.status(200).json({
            goodsId : goods._id,
            name : goods.name,
            description: goods.description,
            category: goods.category,
            price : goods.price
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            message : 'server error'
        });
    }
};

// update goods details 
const updateItem = async(req,res) => {
    const {goodsId} = req.params;
    const {name, description, category, price} = req.body;

    if(!name || !description || !category || typeof price !== 'number'){
        return res.status(400).json({
            message : 'invalid request data'
        });
    }

    try{
        const goods = await Goods.findById(goodsId);

        if(!goods){
            return res.status(404).json({
                message : 'item not found'
            });
        }

        goods.name = name;
        goods.description = description;
        goods.category = category;
        goods.price = price;

        await goods.save();

        res.status(200).json({
            goodsId: goods._id,
            name: goods.name,
            description: goods.description,
            category: goods.category,
            price: goods.price
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server error'
        });
    }
}

// delete goods 
const deleteItem = async (req, res) => {
    const { goodsId } = req.params;

    try {
        const goods = await Goods.findById(goodsId);

        if (!goods) {
            return res.status(404).json({
                message: 'Item not found'
            });
        }

        await Goods.findByIdAndDelete(goodsId);

        res.status(200).json({
            message: 'Item deleted successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server error'
        });
    }
};

module.exports = {createItem, getItemDetails, updateItem, deleteItem};