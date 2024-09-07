const Trade = require('../models/tradeModel');
const SpaceStation = require('../models/spaceStationModel');
const Goods = require('../models/goodsModel');
const mongoose = require('mongoose');

// initiate buy request 
const initiateBuyRequest = async(req,res) => {
    const {sourceStationId, destinationStationId, goodsId, quantity} = req.body;

    if (!mongoose.Types.ObjectId.isValid(sourceStationId) || !mongoose.Types.ObjectId.isValid(destinationStationId)){
        return res.status(400).json({
            message : 'invalid source or destination station ID'
        });
    }

    if (!sourceStationId || !destinationStationId || !goodsId || !quantity || quantity <= 0){
        return res.status(400).json({
            message : 'invalid request data'
        });
    }

    try{
        const sourceStation = await SpaceStation.findById(sourceStationId);
        const destinationStation = await SpaceStation.findById(destinationStationId);
        const goods = await Goods.findById(goodsId);

        if (!sourceStation || !destinationStation || !goods){
            return res.status(404).json({
                message : 'space station or goods not found'
            });
        }

        const newTrade = new Trade({
            sourceStationId,
            destinationStationId,
            goodsId,
            quantity,
            type: 'buy',
            status : 'initiated'
        });

        await newTrade.save();

        res.status(201).json({
            transactionId : newTrade._id,
            status : newTrade.status,
            message : 'buy request initiated successfully'
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            message : 'server error'
        });
    }
}

// initiate sell request 
const initiateSellRequest = async(req,res) => {
    const {sourceStationId, destinationStationId, goodsId, quantity} = req.body;

    if (!mongoose.Types.ObjectId.isValid(sourceStationId) || !mongoose.Types.ObjectId.isValid(destinationStationId)){
        return res.status(400).json({
            message : 'invalid source or destination station ID'
        });
    }

    if (!sourceStationId || !destinationStationId || !goodsId || !quantity || quantity <= 0){
        return res.status(400).json({
            message : 'invalid request data'
        });
    }

    try{
        const sourceStation = await SpaceStation.findById(sourceStationId);
        const destinationStation = await SpaceStation.findById(destinationStationId);
        const goods = await Goods.findById(goodsId);

        if (!sourceStation || !destinationStation || !goods){
            return res.status(404).json({
                message : 'space station or goods not found'
            });
        }

        const newTrade = new Trade({
            sourceStationId,
            destinationStationId,
            goodsId,
            quantity,
            type: 'sell',
            status : 'initiated'
        });

        await newTrade.save();

        res.status(201).json({
            transactionId : newTrade._id,
            status : newTrade.status,
            message : 'sell request initiated successfully'
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            message : 'server error'
        });
    }
}

// check trade status 
const checkTradeStatus = async(req,res) => {
    const {transactionId} = req.params;

    if (!mongoose.Types.ObjectId.isValid(transactionId)){
        return res.status(400).json({
            message : 'invalid transaction ID'
        });
    }

    try{
        const trade = await Trade.findById(transactionId);

        if (!trade){
            return res.status(404).json({
                message : 'transaction not found'
            });
        }

        res.status(200).json({
            transactionId : trade._id,
            status : trade.status,
            details : trade.details || 'no additional details available'
        })
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            message : 'server error'
        });
    }
};

module.exports = {initiateBuyRequest, initiateSellRequest, checkTradeStatus};